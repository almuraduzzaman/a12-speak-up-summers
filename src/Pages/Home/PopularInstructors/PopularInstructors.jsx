import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";


const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    console.log(instructors);
    useEffect(() => {
        fetch('http://localhost:5000/popular/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div>
            <SectionTitle heading={'We have the best instructors'} subHeading={'With 30,000+ digital and printable resources, kids can learn about any topic they are curious about.'} />

            <div className="grid md:grid-cols-3 gap-6 mx-24">
                {
                    instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor.image} className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p className="text-xl text-orange-500">{instructor.email}</p>
                            <div className="card-actions">
                                {/* <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;