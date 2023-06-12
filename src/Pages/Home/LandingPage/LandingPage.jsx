import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import TrustedByOther from "../TrustedByOther/TrustedByOther";


const LandingPage = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
            <TrustedByOther/>
            {/* TODO: extra section  */}
        </div>
    );
};

export default LandingPage;