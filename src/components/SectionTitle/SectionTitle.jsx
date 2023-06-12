
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-4 text-center md:mx-24 rounded-md py-4 mt-20 mb-8 bg-[#d28e4e2f] shadow-md">
            <h3 className="text-xl md:text-3xl text-[#D74539] font-bold">{heading}</h3>
            <p className="text-[#D28E4E]">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;