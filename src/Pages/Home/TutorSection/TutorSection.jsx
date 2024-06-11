import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Tutors from "./Tutors";

const TutorSection = () => {
    return (
        <div className=" my-10">
            <SectionHeader
                title='Learn from the Best'
                description='Access unparalleled expertise and guidance from our esteemed team of tutors, dedicated to maximizing your learning potential.'>
            </SectionHeader>
            <Tutors></Tutors>
        </div>
    );
};

export default TutorSection;