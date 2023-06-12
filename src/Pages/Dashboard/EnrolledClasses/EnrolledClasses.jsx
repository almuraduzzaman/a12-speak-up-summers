import useAuth from "../../../Hooks/useAuth";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import useEnrolledClasses from "../../../Hooks/useEnrolledClasses";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";


const EnrolledClasses = () => {
    const { user } = useAuth();
    // const [axiosSecure] = useAxiosSecure();

    // const { data: courses = [], isLoading } = useQuery({
    //     queryKey: ['enrolledClasses',user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure(`/enrolledClasses?email=${user?.email}`);
    //         return res.data;
    //     }
    // });
    // console.log(courses);
    const [courses, , isLoading] = useEnrolledClasses();
    // console.log(courses);

    if (isLoading) {
        return <LoadingSpinner />
    }


    return (
        <div className="w-full">
            <Helmet>
                <title>Enrolled Classes | SpeakUpSummers</title>
            </Helmet>
            <SectionTitle heading={`Welcome to the class ${user.displayName}!`} subHeading={`Total Course: ${courses?.length}`} />

            <div className="grid md:grid-cols-3 gap-6 px-24">
                {
                    courses.map(course => <section key={course._id} className="text-gray-600 body-font">
                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={course.courseImage} alt="content" />
                            <h2 className="text-lg text-gray-900 font-medium title-font">{course.courseName}</h2>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">By {course.instructorName}</h3>
                            <p className="leading-relaxed text-base">Available Seats: {course.availableSeats}</p>
                            <p className="leading-relaxed text-base">price: {course.price}</p>

                            
                            <button className="btn btn-warning">Start</button>
                        </div>
                    </section>)
                }
            </div>

        </div>
    );
};

export default EnrolledClasses;