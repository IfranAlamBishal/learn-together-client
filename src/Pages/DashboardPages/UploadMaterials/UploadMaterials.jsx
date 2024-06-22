import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const UploadMaterials = () => {
    return (
        <div className=" my-10">
            <Helmet>
                <title>Learn Together | Upload Materials</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='Upload Materials'
                    description=''>
                </SectionHeader>
            </div>
        </div>
    );
};

export default UploadMaterials;