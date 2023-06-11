import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Feedback = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const params = useParams();
    console.log(params.id);

    const onSubmit = data => {
        console.log(data);
        axiosSecure.patch(`/feedback/${params.id}`, { feedback: data.feedback })
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Feedback given successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    };




    return (
        <>
            < section className="rounded-lg bg-gray-200 p-8 shadow-lg" >
                <SectionTitle heading={'Feedback'} subHeading={'write the reasons for the instructors'} />
                <div className="md:px-28">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">

                        <div>
                            <textarea {...register("feedback", { required: true })} placeholder="Write the reasons here.." className="w-full rounded-lg border-gray-200 p-3 text-sm" rows="5"></textarea>
                            {errors.feedback?.type === 'required' && <p>Feedback is required</p>}
                        </div>


                        <div className="mt-4">
                            <button className=" w-full cursor-pointer rounded-md bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 py-3 px-5 text-base btn border-0" type="submit">SEND</button>
                        </div>
                    </form>
                </div>
            </section >
        </>
    );
};

export default Feedback;