import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            try {
                const response = await fetch(`https://resturent-app-server.vercel.app/carts?email=${user?.email}`)
                if (!response.ok) {
                    throw new Error('Network error was not ok!')
                }
                return response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }
    })

    return [carts, refetch];

};

export default useCart;