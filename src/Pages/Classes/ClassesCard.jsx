import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClasses from "../../Hooks/useSelectedClasses";


const ClassesCard = ({ classObj }) => {
    const { user } = useContext(AuthContext);
    const { _id, availableSeats, image, name, instructor, price } = classObj;
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] =useSelectedClasses();

    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { courseId: _id, name, image, price, email: user.email };

            fetch('http://localhost:5000/selectedClasses', {
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
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
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
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font">{name}</h2>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">By {instructor}</h3>
                <p className="leading-relaxed text-base">Available Seats: {availableSeats}</p>
                <p className="leading-relaxed text-base">price: {price}</p>

                {/* TODO: Logged in as admin/instructor  */}
                <button onClick={() => handleAddToCart(classObj)} disabled={availableSeats == 0 ? true : false} className="btn btn-warning">Enroll</button>
            </div>
        </section>
    );
};

export default ClassesCard;