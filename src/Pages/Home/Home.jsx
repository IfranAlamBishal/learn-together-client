import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import StudySection from "./Study Session Section/StudySection";
import TutorSection from "./TutorSection/TutorSection";
import { useEffect, useState } from "react";

const Home = () => {
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div>
            <Helmet>
                <title>Learn Together | Home</title>
            </Helmet>
            <div className="flex justify-center">
                {
                    spinner && <span className="loading loading-infinity w-24"></span>
                }
            </div>
            <Banner></Banner>
            <StudySection></StudySection>
            <TutorSection></TutorSection>
        </div>
    );
};

export default Home;