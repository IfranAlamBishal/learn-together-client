import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const PendingSessions = () => {
    return (
        <div className=" my-10">
            <Helmet>
                    <title>Learn Together | Pending Sessions</title>
                </Helmet>
                <div className=" mb-10">
                    <SectionHeader
                        title='Pending Sessions'
                        description=''>
                    </SectionHeader>
                </div>
        </div>
    );
};

export default PendingSessions;