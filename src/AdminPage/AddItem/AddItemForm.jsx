import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineStackedBarChart } from 'react-icons/md';
import useCategories from '../../Hooks/useCategories';
import axios from 'axios';

const AddItemForm = () => {
    const [categories] = useCategories();
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // from react form hook
    const [categoriValue, setCategoriValue] = useState('');
    const [fileError, setFileError] = useState(false);
    const [image, setImage] = useState('');
    const [album, setAlbum] = useState('resturent app');
    const [preview, setPreview] = useState('');
    const [formLoading, setFormLoading] = useState(false);

    // from submission code
    const onSubmit = async (data) => {
        // console.log(data);
        setFormLoading(true);
        try {
            if (!image) {
                console.error('Please select an image before uploading.');
                return;
            }

            const imgbbUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBBAPIKEY}&album=${album}`;
            const formData = new FormData();

            // Assuming data.image is the file input from the form
            formData.append("image", image);
            formData.append('album', album); // Add this line


            const response = await axios.post(imgbbUrl, formData);


            const imageURL = response.data.data.display_url;
            const recipeData = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: data.price,
                image: imageURL
            }
            const result = await axios.post('https://resturent-app-server.vercel.app/menu', recipeData)
            const responseRecipe = result.data;
            // console.log(responseRecipe);

            // reset form
            reset();
            setCategoriValue('');
        } catch (error) {
            console.error("Error: ", error);
        } finally {
            setFormLoading(false);
        }

    };

    const handleCategoryChange = (event) => {
        setCategoriValue(event.target.value);
        errors.category = event.target.value;
    };

    // image preview
    const handleImg = (event) => {
        const img = event.target.files[0];
        setImage(img);

        if (img) {
            const urlImage = URL.createObjectURL(img);
            setPreview(urlImage);
            setFileError(false);
        } else {
            setPreview(null);
            setFileError(true);
        }
    };
    // console.log(errors.recipe.message)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 p-8 lg:p-[50px] "
        >

            {/* first row */}
            <div className="mb-6">
                <div className="w-full">
                    <label htmlFor="name" className="block text-xl font-bold text-gray-700 mb-4">
                        Recipe name <span className={errors.name ? 'text-red-500' : ''}>*</span>
                    </label>
                    <input
                        {...register('name', { required: 'Recipe name is required' })}
                        type="text"
                        id="name"
                        className={`w-full py-[10px] md:py-[15px] lg:py-[26px] px-[15px] md:px-[20px] lg:px-[36px] border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                        placeholder="Recipe name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
            </div>


            {/* second row */}
            <div className='flex flex-col md:flex-row gap-6 mb-6'>
                <div className="mb-6 w-full">
                    <label htmlFor="category" className="block text-xl font-bold text-gray-700 mb-4">
                        Category <span className={errors.price ? 'text-red-500' : ''}>*</span>
                    </label>

                    <div className='pr-4 bg-white rounded-md overflow-hidden'>
                        <select
                            {...register("category", { required: 'Category is required' })}
                            className={`w-full py-[10px] md:py-[15px] lg:py-[26px] px-[15px] md:px-[20px] lg:px-[36px] border ${errors.category ? 'border-red-500' : 'border-gray-300'} ${categoriValue ? 'text-gray-700' : 'text-gray-400'} focus:outline-none  border-none  capitalize`}
                            id='category'
                            onChange={handleCategoryChange}
                            value={categoriValue}
                        >
                            <option value="">Category</option>
                            {
                                categories.map((item, i) =>
                                    <option
                                        key={i}
                                        value={item.category}
                                    >
                                        {item.category}
                                    </option>
                                )
                            }
                        </select>
                    </div>

                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                <div className="mb-6 w-full">
                    <label htmlFor="price" className="block text-xl font-bold text-gray-700 mb-4">
                        Price <span className={errors.price ? 'text-red-500' : ''}>*</span>
                    </label>
                    <input
                        {...register('price',
                            { required: 'Price is required' }
                        )}
                        type="number"
                        id="price"
                        className={`w-full py-[10px] md:py-[15px] lg:py-[26px] px-[15px] md:px-[20px] lg:px-[36px] border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                        placeholder="Price"
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>
            </div>


            {/* text area */}
            <div className="mb-6">
                <label htmlFor="recipe" className="block text-xl font-bold text-gray-700 mb-4">
                    Recipe <span className={errors.recipe ? 'text-red-500' : ''}>*</span>
                </label>
                <textarea
                    {...register('recipe', { required: 'Recipe details is required' })}
                    id="recipe"
                    className={`w-full h-[120px]  md:h-[180px] lg:h-[300px] py-[10px] md:py-[15px] lg:py-[26px] px-[15px] md:px-[20px] lg:px-[36px] border ${errors.recipe ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                    placeholder="Recipe Details"
                    rows="4"
                ></textarea>
                {errors.recipe && <p className="text-red-500 text-sm">{errors.recipe.message}</p>}
            </div>

            {/* file */}
            <div className='flex justify-between items-center'>
                <div>
                    <input type="file"
                        className={`file-input w-full max-w-xs ${fileError ? 'border-2 border-red-500' : ''}`}
                        accept="image/*"
                        onChange={handleImg}
                        required
                    />
                </div>
                {
                    preview && <div className='w-[100px] h-[100px] rounded-sm overflow-hidden border border-gray-500'>
                        <img src={preview} alt="upload image" className='object-cover w-full h-full' />
                    </div>
                }
                {fileError && (
                    <p className="text-red-500 text-sm">Recipe image is required</p>
                )}
            </div>

            {formLoading ?
                <button
                    disabled
                    type="submit"
                    className={` mt-[32px] text-white font-bold  py-4 px-[22px]  focus:outline-none flex justify-center items-center gap-0 rounded-xl duration-300 disabled:bg-gradient-to-r from-[#835D23]/70 to-[#B58130]/60 w-[180px] h-[56px]`}
                // style={{ backgroundImage: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}
                >
                    <span className="loading loading-infinity loading-lg"></span>
                </button>
                :
                <button
                    type="submit"
                    className={`w-fit mt-[32px] text-white font-bold  py-4 px-[22px]  focus:outline-none flex justify-center items-center gap-2 hover:rounded-xl duration-300 `}
                    style={{ backgroundImage: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}
                >
                    Send Message
                    <MdOutlineStackedBarChart />
                </button>
            }
        </form>
    );
};

export default AddItemForm;