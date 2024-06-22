import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const CreateSessions = () => {
    return (
        <div className=" my-10">
            <Helmet>
                <title>Learn Together | Create Study Sessions</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='Create Study Sessions'
                    description=''>
                </SectionHeader>
            </div>
        </div>
    );
};

export default CreateSessions;