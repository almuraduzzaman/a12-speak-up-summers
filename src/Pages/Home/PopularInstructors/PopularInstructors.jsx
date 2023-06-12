import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";


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
                    instructors.map(instructor => <div key={instructor._id} className="card w-fit bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor.image} className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-[#D74539]">{instructor.name}</h2>
                            <p className="text-xl text-[#D28E4E]">{instructor.email}</p>
                            {/* <div className="card-actions">
                                <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                            </div> */}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;