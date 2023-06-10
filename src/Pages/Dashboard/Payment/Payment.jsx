import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [selectedClasses] = useSelectedClasses();
    const total = selectedClasses.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={selectedClasses} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;