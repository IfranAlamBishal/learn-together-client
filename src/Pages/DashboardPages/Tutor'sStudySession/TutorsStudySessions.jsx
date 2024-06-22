import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const TutorsStudySessions = () => {
    return (
        <div className=" my-10">
            <Helmet>
                <title>Learn Together | My Study Sessions</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='My Study Sessions'
                    description=''>
                </SectionHeader>
            </div>
        </div>
    );
};

export default TutorsStudySessions;