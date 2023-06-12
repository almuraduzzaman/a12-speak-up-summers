import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { BsFillPeopleFill } from "react-icons/bs";


const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    console.log(instructors);
    useEffect(() => {
        fetch('https://a12-speak-up-summers-server.vercel.app/popular/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div>
            <SectionTitle heading={'Meet our Popular Language Instructors'} subHeading={'Learn from Experienced and Highly Recommended InstructorsLearn from Experienced and Highly Recommended Instructors'} />

            <div className="grid md:grid-cols-3 gap-6 mx-4 md:mx-24">
                {
                    instructors.map(instructor =>

                        <div key={instructor._id} className="card w-fit bg-base-100 shadow-xl">
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
        </div>
    );
};

export default PopularInstructors;