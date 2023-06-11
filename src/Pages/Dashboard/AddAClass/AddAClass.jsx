import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddAClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    // const onSubmit = data => {
    //     const saveUser = {
    // courseName: data.name,
    // courseImage: data.image,
    // instructorName: data.instructorName,
    // instructorEmail: data.instructorEmail,
    // availableSeats: parseInt(data.availableSeats),
    // price: parseFloat(data.price),
    // status: "pending"
    //     }
    //     console.log(saveUser);
    // }

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    // const {name, price, category, recipe} = data;
                    const newItem = {
                        courseName: data.name,
                        courseImage: imgURL,
                        instructorName: data.instructorName,
                        instructorEmail: data.instructorEmail,
                        availableSeats: parseInt(data.availableSeats),
                        price: parseFloat(data.price),
                        status: "pending",
                        enrolled: parseInt(0),
                        feedback: ''
                    }
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                // reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };
    return (
        <>
            < section className="rounded-lg bg-gray-200 p-8 shadow-lg" >
                <SectionTitle heading={'Add a Class'} subHeading={'Use the below form to create a new class'} />
                <div className="md:px-28">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                        <div className="flex gap-8">
                            <div className="w-1/2">
                                <label className="font-medium">Class Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Class Name"
                                    type="text"
                                    {...register("name", { required: true })}
                                />
                                {errors.name?.type === 'required' && <p>Class name is required</p>}
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Class Image</label>
                                {/* <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Photo URL"
                                    type="url"
                                    {...register("image", { required: true })}
                                /> */}
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                                {errors.image?.type === 'required' && <p>Image is required</p>}
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="font-medium">Instructor Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Seller Name"
                                    type="text"
                                    {...register("instructorName", { required: true })}
                                    readOnly
                                    value={user?.displayName || ''}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Instructor Email</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Seller Email"
                                    type="email"
                                    {...register("instructorEmail", { required: true })}
                                    readOnly
                                    value={user?.email || ''}
                                />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="font-medium">Available Seats</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Available Seats"
                                    type="number"
                                    min='1'
                                    {...register("availableSeats", { required: true })}
                                />
                                {errors.availableSeats?.type === 'required' && <p>Available Seats is required</p>}
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Price</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Available"
                                    type="number"
                                    min='1'
                                    {...register("price", { required: true })}
                                />
                                {errors.price?.type === 'required' && <p>Price is required</p>}
                            </div>
                        </div>

                        <div className="mt-4">
                            {/* <input className=" w-full cursor-pointer rounded-md bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 py-3 px-5 text-base btn border-0" type="submit" value="ADD" /> */}
                            <button className=" w-full cursor-pointer rounded-md bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 py-3 px-5 text-base btn border-0" type="submit">ADD</button>
                        </div>
                    </form>
                </div>
            </section >
        </>
    );
};

export default AddAClass;