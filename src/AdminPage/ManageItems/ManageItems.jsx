import SectionHeader from '../../Components/SectionHeader';
import useCart from '../../Hooks/useCart';

const ManageItems = () => {

    const [carts, refetch] = useCart();

    return (
        <div>
            <SectionHeader
                title={"Hurry Up!"}
                subHeading={"MANAGE ALL ITEMS"} />

            <div className='bg-white p-[50px]'>
                <h3 className='font-cinzel font-bold text-[32px]'>Total items: {carts?.length}</h3>
            </div>
        </div>
    );
};

export default ManageItems;