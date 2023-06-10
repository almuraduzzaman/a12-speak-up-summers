import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    // console.log(classes);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <>
            <SectionTitle heading={'Our Popular Classes'} subHeading={'Review important concepts and explore new topics—the options are endless'} />

            <div className="grid md:grid-cols-3 gap-6 px-24">
                {classes.map((classObj) => <ClassesCard key={classObj._id} classObj={classObj} />)}
            </div>
        </>
    );
};

export default Classes;