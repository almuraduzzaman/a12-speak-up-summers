import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { BsFillPeopleFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    console.log(instructors);
    useEffect(() => {
        fetch('https://a12-speak-up-summers-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Instructors | SpeakUpSummers</title>
            </Helmet>
            <SectionTitle heading={'Meet Our Expert Language Instructors'} subHeading={'Discover Passionate Educators Dedicated to Guiding Your Language Learning Journey'} />

            <div className="grid md:grid-cols-3 gap-6 mx-24 mb-16">
                {
                    instructors && instructors?.map(instructor => <div key={instructor._id} className="card w-fit bg-base-100 shadow-xl">
                        <figure>
                            <img src={instructor.instructorPhoto} className="rounded-xl" />
                        </figure>
                        <div className="px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-[#D74539]">{instructor.instructorName}</h2>
                                <p className="text-lg text-[#D28E4E]">{instructor.instructorEmail}</p>
                            </div>
                            <div>
                                <p className="flex gap-1 justify-end text-xl  mb-2">
                                    <BsFillPeopleFill />
                                    <p className="tracking-widest text-sm">{instructor.enrolled} Students</p>
                                </p>
                                <button className="btn btn-sm">See Classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Instructors;