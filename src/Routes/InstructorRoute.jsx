import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";
import LoadingSpinner from "../Shared/LoadingSpinner";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor,isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <LoadingSpinner/>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;