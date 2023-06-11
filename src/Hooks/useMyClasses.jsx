import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useMyClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: myClasses = [], isLoading } = useQuery({
        queryKey: ['my-classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/my-classes?email=${user?.email}`);
            return res.data;
        }
    });

    return [myClasses, isLoading];
};

export default useMyClasses;
