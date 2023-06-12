import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    console.log(classes);
    useEffect(() => {
        fetch('https://a12-speak-up-summers-server.vercel.app/popular/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <SectionTitle heading={'Explore our Popular Language Classes'} subHeading={'Discover the Most Loved Courses for Language Learning'} />

            <div className="grid md:grid-cols-3 gap-6 mx-24">
                {classes.map((classObj) => (
                    <section key={classObj._id} className="text-gray-600 body-font">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={classObj.courseImage} alt="content" />
                            <h2 className="text-lg text-gray-900 font-medium title-font">{classObj.courseName}</h2>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">By {classObj.instructorName}</h3>
                            <p className="leading-relaxed text-base">Enrolled: {classObj.enrolled}</p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;