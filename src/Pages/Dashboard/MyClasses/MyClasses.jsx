import { Helmet } from "react-helmet-async";
import useMyClasses from "../../../Hooks/useMyClasses";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const MyClasses = () => {
    const [myClasses, isLoading] = useMyClasses();
    console.log(myClasses);

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div>
            <Helmet>
                <title>My Classes | SpeakUpSummers</title>
            </Helmet>
            <div className="w-full">
                <SectionTitle heading={'My Classes'} subHeading={`Total Classes added by me: ${myClasses?.length}`} />

                <div className="grid md:grid-cols-3 gap-6 px-24">
                    {
                        myClasses.map(course => <section key={course._id} className="text-gray-600">
                            <div className="bg-gray-100 p-6 rounded-lg relative">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={course.courseImage} alt="class" />
                                <p className="badge badge-warning capitalize absolute top-6 right-6">{course.status}</p>
                                <p className="badge badge-accent capitalize absolute top-6 left-6">Update</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-lg text-[#D74539] font-medium title-font">{course.courseName}</h2>
                                        <h3 className="tracking-widest text-[#D28E4E] text-xs font-medium title-font mb-4">By {course.instructorName}</h3>
                                    </div>
                                    <div className="ml-2 text-end">
                                        <p className="tracking-widest text-sm">Enrolled: {course.enrolled}</p>
                                        <p className="leading-relaxed text-base">price: ${course.price}</p>
                                    </div>
                                </div>
                                {
                                    course?.feedback && <p className="text-slate-500">Feedback: {course.feedback}</p>
                                }
                            </div>
                        </section>

                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default MyClasses;