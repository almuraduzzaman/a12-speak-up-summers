import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    // console.log(classes);
    useEffect(() => {
        fetch('https://a12-speak-up-summers-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Classes | SpeakUpSummers</title>
            </Helmet>
            <SectionTitle heading={'Explore Language Classes'} subHeading={'Embark on a Journey of Linguistic Discovery and Cultural Exploration'} />

            <div className="grid md:grid-cols-3 gap-6 px-24">
                {classes.map((classObj) => <ClassesCard key={classObj._id} classObj={classObj} />)}
            </div>
        </>
    );
};

export default Classes;