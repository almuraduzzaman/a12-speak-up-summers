import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useClassesAddedByInstructors = () => {
    const { loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: allClasses = [], isLoading } = useQuery({
        queryKey: ['classes-added-by-instructors'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes-added-by-instructors`)
            return res.data;
        },
    })

    return [allClasses, isLoading, refetch]
};

export default useClassesAddedByInstructors;