import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const AllMaterials = () => {
    return (
        <div className=" my-10">
            <Helmet>
                <title>Learn Together | All Materials</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='All Materials'
                    description=''>
                </SectionHeader>
            </div>
        </div>
    );
};

export default AllMaterials;