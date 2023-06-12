import { motion } from "framer-motion"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const TrustedByOther = () => {
    return (
        <div className="mx-4 md:mx-auto md:px-6">
            <SectionTitle heading={'Trusted by Many'}  subHeading={'Join our Trusted Language Learning Community'}/>

            <section className="text-center">
                <div className="py-12 md:px-12">
                    <div className="mx-auto xl:px-32">
                        <div className=" grid lg:grid-cols-2">
                            <motion.div
                                animate={{ y: [0, 80, 0] }}
                                transition={{ repeat: Infinity, duration: 2, yoyo: Infinity }}
                                className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                <div
                                    className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <h2 className="mb-16 text-3xl font-bold">
                                        Trusted by the best institution <br />
                                        <span className="">around the world</span>
                                    </h2>
                                    <div className="grid gap-x-6 md:grid-cols-2">
                                        <div className="mb-12">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png"
                                                className="neutralscale px-6" />
                                        </div>

                                        <div className="mb-12">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo5-1.png"
                                                className="neutralscale px-6" />
                                        </div>

                                        <div className="mb-12 md:mb-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo3-1.png"
                                                className="neutralscale px-6" />
                                        </div>

                                        <div className="">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo4-1.png"
                                                className="neutralscale px-6" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="md:mb-12 lg:mb-0">
                                <img src="https://img.freepik.com/free-photo/eclipse_1048-4716.jpg?w=740&t=st=1686542639~exp=1686543239~hmac=b5e6380ab872ef4d83a57f2bc7865fc18f7cf5ebb07dfe12605a534b1689a2dd"
                                    className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrustedByOther;