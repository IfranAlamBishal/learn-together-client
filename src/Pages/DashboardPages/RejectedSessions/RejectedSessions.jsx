import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const RejectedSessions = () => {
    return (
        <div className=" my-10">
        <Helmet>
                <title>Learn Together | Rejected Sessions</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='Rejected Sessions'
                    description=''>
                </SectionHeader>
            </div>
    </div>
    );
};

export default RejectedSessions;