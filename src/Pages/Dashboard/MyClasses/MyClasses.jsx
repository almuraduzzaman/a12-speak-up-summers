import useMyClasses from "../../../Hooks/useMyClasses";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const MyClasses = () => {
    const [myClasses, isLoading] = useMyClasses();
    // console.log(myClasses);

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div>

            <div className="w-full">
            <SectionTitle heading={'My Classes'} subHeading={`Total Classes added by me: ${myClasses?.length}`} />

            <div className="grid md:grid-cols-3 gap-6 px-24">
                {
                    myClasses.map(course => <section key={course._id} className="text-gray-600 body-font">
                        <div className='bg-gray-100 p-6 rounded-lg'>
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={course.courseImage} alt="content" />
                            <h2 className="text-lg text-gray-900 font-medium title-font">{course.name}</h2>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">By {course.instructorName}</h3>
                            <p className="leading-relaxed text-base">Available Seats: {course.availableSeats}</p>
                            <p className="leading-relaxed text-base">Enrolled Studends: {course.enrolled}</p>
                            <p className="leading-relaxed text-base">price: {course.price}</p>

                            {/* TODO: Logged in as admin/instructor  */}
                            <button className="btn btn-warning">{course.status}</button>
                            <button className="btn btn-outline">Update</button>
                            {/* TODO: the Class was denied, which will appear in the feedback column.  */}
                            {course.status == 'denied' && <p>Feedback: {course.feedback}</p>}
                        </div>
                    </section>)
                }
            </div>

        </div>
        </div>
    );
};

export default MyClasses;