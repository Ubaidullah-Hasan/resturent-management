import React from 'react';
import PageTitle from '../../Components/PageTitle';
import SectionHeader from '../../Components/SectionHeader';
import ContactForm from '../../Pages/ContactUs/ContactForm';
import AddItemForm from './AddItemForm';

const AddItem = () => {
    return (
        <div>
            <PageTitle
                title='Add Items'
            />

            <div className='ms-[40px] lg:ms-[150px] mr-[40px] lg:mr-[177px]'>
                <SectionHeader
                    title={"ADD AN ITEM"}
                    subHeading={"What's new?"}
                />

                <AddItemForm />
            </div>
        </div>
    );
};

export default AddItem;