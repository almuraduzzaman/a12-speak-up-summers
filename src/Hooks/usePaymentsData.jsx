import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const usePaymentsData = () => {
    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payments = [], isLoading } = useQuery({
        queryKey: ['payments-history', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments-history?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [payments, refetch, isLoading]
};

export default usePaymentsData;