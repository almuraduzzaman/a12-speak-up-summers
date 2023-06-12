import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const ClassesCard = ({ classObj }) => {
    const { user } = useContext(AuthContext);
    const { _id, availableSeats, courseImage, courseName, instructorName, price } = classObj;
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useSelectedClasses();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { courseId: _id, courseName, courseImage, price, email: user.email };

            fetch('https://a12-speak-up-summers-server.vercel.app/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to enroll in the course!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#D74539',
                cancelButtonColor: '#D28E4E',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <section key={classObj._id} className="text-gray-600 body-font">
            <div className={`${availableSeats == 0 ? 'bg-red-100' : 'bg-gray-100'} p-6 rounded-lg`}>
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={courseImage} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font">{courseName}</h2>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">By {instructorName}</h3>
                <p className="leading-relaxed text-base">Available Seats: {availableSeats}</p>
                <p className="leading-relaxed text-base">price: {price}</p>

                <button onClick={() => handleAddToCart(classObj)} disabled={(availableSeats == 0) || isAdmin || isInstructor ? true : false} className="btn btn-warning">Enroll</button>
            </div>
        </section>
    );
};

export default ClassesCard;