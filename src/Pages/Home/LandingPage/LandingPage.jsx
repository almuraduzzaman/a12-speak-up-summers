import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import TrustedByOther from "../TrustedByOther/TrustedByOther";


const LandingPage = () => {
    return (
        <div>
            <Helmet>
                <title>Home | SpeakUpSummers</title>
            </Helmet>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
            <TrustedByOther/>
        </div>
    );
};

export default LandingPage;