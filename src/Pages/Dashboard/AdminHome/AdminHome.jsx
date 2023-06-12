import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AdminHome = () => {
    const [isAdmin] = useAdmin();
    const { user } = useAuth();
    console.log(isAdmin);
    return (
        <section className="text-neutral-700 dark:text-neutral-300 w-2/3">
            {
                isAdmin ? <SectionTitle heading={'Efficient Admin Dashboard'} subHeading={'Manage Your Language Learning Journey with Ease'} /> :
                    <SectionTitle heading={'Personalized User Dashboard'} subHeading={'Streamline Operations and Enhance Language Learning Management'} />
            }




            <div className=" text-center mx-auto">
                <div>
                    <div
                        className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                        <div className="h-28 overflow-hidden rounded-t-lg bg-[#D28E4E]"></div>
                        <div
                            className="mx-auto -mt-12 w-24 h-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img
                                src={user.photoURL} />
                        </div>
                        <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">{user.displayName}</h4>
                            <p style={{ wordWrap: 'break-word', maxWidth: '100%' }} className="mb-4 text-xl">{user.email}</p>
                            <hr />
                            <p className="mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="inline-block h-7 w-7 pr-2"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg>
                                {
                                    isAdmin ? <span>Behind every successful language learning experience, there is a dedicated admin team ensuring seamless operations and a smooth learning environment.</span>
                                        :
                                        <span> Language learning is a key that unlocks a world of possibilities, empowering you to communicate, connect, and thrive in diverse global communities.</span>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminHome;