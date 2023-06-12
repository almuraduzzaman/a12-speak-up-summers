import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClasses = () => {
    const { user, loading } = useContext(AuthContext);

    // const { refetch, data: selectedClasses = [] } = useQuery({
    //     queryKey: ['selectedClasses', user?.email],
    //     queryFn: async ()=> {
    //         const res =await fetch(`https://a12-speak-up-summers-server.vercel.app/selectedClasses?email=${user?.email}`);
    //         return res.json();
    //     }
    // })

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selectedClasses = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [selectedClasses, refetch]
};

export default useSelectedClasses;