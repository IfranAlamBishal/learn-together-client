import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const ApprovedSessions = () => {
    return (
        <div className=" my-10">
            <Helmet>
                    <title>Learn Together | Approved Sessions</title>
                </Helmet>
                <div className=" mb-10">
                    <SectionHeader
                        title='Approved Sessions'
                        description=''>
                    </SectionHeader>
                </div>
        </div>
    );
};

export default ApprovedSessions;