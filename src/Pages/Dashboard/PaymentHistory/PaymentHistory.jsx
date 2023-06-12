import { Helmet } from "react-helmet-async";
import usePaymentsData from "../../../Hooks/usePaymentsData";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import moment from 'moment';


const PaymentHistory = () => {
    const [payments, , isLoading] = usePaymentsData();
    // console.log(payments);

    if (isLoading) {
        return <LoadingSpinner />
    }
    // console.log(payments);
    return (
        <div className="w-3/4 mx-auto">
            <Helmet>
                <title>Payment History| SpeakUpSummers</title>
            </Helmet>
            <SectionTitle heading={'Payment History'} subHeading={"All your transaction IDs here"} />

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Enroll Date</th>
                            <th>Course Name</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map(payment => <tr key={payment._id}>
                                <td>{moment(payment.date).format("MMMM Do YYYY, h:mm:ss a")}</td>
                                <td>{payment.CourseName}</td>
                                <td>{payment.transactionId}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;