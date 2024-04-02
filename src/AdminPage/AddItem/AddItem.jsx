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

            <div>
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