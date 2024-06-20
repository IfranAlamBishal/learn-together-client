import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const ViewStudyMaterials = () => {
    return (
        <div>
            <Helmet>
                <title>Learn Together | Study Materials</title>
            </Helmet>
            <div className=" mb-10">
                    <SectionHeader
                        title='Study Materials'
                        description='Access all your study materials in one convenient place.'>
                    </SectionHeader>
                </div>
        </div>
    );
};

export default ViewStudyMaterials;