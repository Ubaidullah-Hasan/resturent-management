import React, { useEffect, useState } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [categoryLoading, setCategoryLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://resturent-app-server.vercel.app/categories");
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await res.json();
                setCategories(data);
                setCategoryLoading(false);
            } catch (err) {
                console.error('There was a problem with the fetch operation:', err.message);
                setCategoryLoading(false);
            }
        };

        fetchData();
    }, []);


    return [categories, categoryLoading];
};

export default useCategories;