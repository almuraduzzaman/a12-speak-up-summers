import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    // console.log(classes);
    useEffect(() => {
        fetch('https://a12-speak-up-summers-server.vercel.app/popular/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <SectionTitle heading={'Explore our Popular Language Classes'} subHeading={'Discover the Most Loved Courses for Language Learning'} />

            <div className="grid md:grid-cols-3 gap-8 mx-4 md:mx-24">
                {classes.map((classObj) => (
                    <section key={classObj._id} className="text-gray-600">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={classObj.courseImage} alt="class" />
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg text-[#D74539] font-medium title-font">{classObj.courseName}</h2>
                                    <h3 className="tracking-widest text-[#D28E4E] text-xs font-medium title-font mb-4">By {classObj.instructorName}</h3>
                                </div>
                                <p className="tracking-widest text-sm">Enrolled: {classObj.enrolled}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;