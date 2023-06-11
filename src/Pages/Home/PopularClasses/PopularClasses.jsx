import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";


const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    // console.log(classes);
    useEffect(() => {
        fetch('http://localhost:5000/popular/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <SectionTitle heading={'Our Popular Classes'} subHeading={'Review important concepts and explore new topics—the options are endless'} />

            <div className="grid md:grid-cols-3 gap-6 mx-24">
                {classes.map((classObj) => (
                    <section key={classObj._id} className="text-gray-600 body-font">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={classObj.courseImage} alt="content" />
                            <h2 className="text-lg text-gray-900 font-medium title-font">{classObj.name}</h2>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">By {classObj.instructor}</h3>
                            <p className="leading-relaxed text-base">Enrolled: {classObj.totalStudents}</p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;