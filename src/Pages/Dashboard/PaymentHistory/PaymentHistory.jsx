import usePaymentsData from "../../../Hooks/usePaymentsData";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";


const PaymentHistory = () => {
    const [payments, , isLoading] = usePaymentsData();

    if (isLoading) {
        return <LoadingSpinner />
    }
    // console.log(payments);
    return (
        <div className="w-full">
            <SectionTitle heading={'Payment History'} subHeading={"All your transaction IDs here"} />

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Enroll Date</th>
                            <th>Course</th>
                            <th>Trx ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map(payment => <tr key={payment._id}>
                                <td>{payment.date}</td>
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