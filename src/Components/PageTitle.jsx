import React from 'react';
import { Helmet } from "react-helmet";

const PageTitle = ({title, metaContent}) => {
    return (
        <div>
            <Helmet>
                <title className='capitalize'>Resturent Management || {title}</title>
                <meta name="description" content={metaContent} />
            </Helmet>
        </div>
    );
};

export default PageTitle;