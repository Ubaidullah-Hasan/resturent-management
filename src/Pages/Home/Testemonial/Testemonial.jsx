import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/SectionHeader';

const Testemonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);


    return (
        <section>
            <SectionHeader
                subHeading={"What Our Clients Say"}
                title={"TESTIMONIALS"}
            />

            <div>
                
            </div>
        </section>
    );
};

export default Testemonial;