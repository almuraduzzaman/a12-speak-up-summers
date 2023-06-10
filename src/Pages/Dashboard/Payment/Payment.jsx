import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { classId } = useParams();
    const [selectedClasses] = useSelectedClasses();
    const specificClass = selectedClasses.find((classItem) => classItem._id === classId);
    const desiredData = specificClass.price;
    const price = parseFloat(desiredData.toFixed(2))
    console.log(specificClass);


    // const total = selectedClasses.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm specificClass={specificClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;