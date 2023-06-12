import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { BsFillPeopleFill } from "react-icons/bs";


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
            <SectionTitle heading={'We have the best instructors'} subHeading={'With 30,000+ digital and printable resources, kids can learn about any topic they are curious about.'} />

            <div className="grid md:grid-cols-3 gap-6 mx-24">
                {
                    instructors && instructors?.map(instructor => <div key={instructor._id} className="card w-fit bg-base-100 shadow-xl">
                        <figure className="px-6 pt-6">
                            <img src={instructor.instructorPhoto} className="rounded-xl" />
                        </figure>
                        <div className="card-body flex items-center">
                            <div>
                                <h2 className="card-title text-[#D74539]">{instructor.instructorName}</h2>
                                <p className="text-xl text-[#D28E4E]">{instructor.instructorEmail}</p>
                            </div>
                            <div className="flex gap-1">
                                <BsFillPeopleFill />
                                <p className="tracking-widest text-sm">{instructor.enrolled}</p>
                            </div>
                            {/* <div className="card-actions">
                          <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                      </div> */}
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Instructors;