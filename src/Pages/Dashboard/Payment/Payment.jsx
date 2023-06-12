import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { classId } = useParams();
    const [selectedClasses] = useSelectedClasses();
    const specificClass = selectedClasses.find((classItem) => classItem._id === classId);
    const desiredData = specificClass?.price;
    const price = parseFloat(desiredData?.toFixed(2));

    return (
        <div>
            <Helmet>
                <title>Payment | SpeakUpSummers</title>
            </Helmet>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm specificClass={specificClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;