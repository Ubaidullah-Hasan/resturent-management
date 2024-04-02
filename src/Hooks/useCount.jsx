import React, { useEffect, useState } from 'react';

const useCount = (categoryName) => {
    const [countItems, setCountItems] = useState({});
    const categoryWiseItemsCount = countItems?.categoryWiseItemsCount || 0;
    const menuCount = countItems?.menuCount || 0;

    useEffect(() => {
        fetch(`https://resturent-app-server.vercel.app/totalCount/${categoryName}`)
            .then(res => res.json())
            .then(data => {
                setCountItems(data)
            })
    }, [categoryName]);

    return [categoryWiseItemsCount, menuCount];
};

export default useCount;