import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const ViewTutorsMaterials = () => {
    return (
        <div className=" my-10">
            <Helmet>
                <title>Learn Together | View All Materials</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='View All Materials'
                    description=''>
                </SectionHeader>
            </div>
        </div>
    );
};

export default ViewTutorsMaterials;