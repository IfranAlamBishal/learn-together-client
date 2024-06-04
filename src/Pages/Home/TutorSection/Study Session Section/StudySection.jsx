import { useEffect, useState } from "react";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import SessionCard from "./SessionCard";
import { Link } from "react-router-dom";

const StudySection = () => {

    const [sessions, setSessions] = useState([])

    useEffect(() => {
        fetch('/public/studySessions.json')
            .then(res => res.json())
            .then(data => setSessions(data))
    }, [])

    const displayCards = sessions.slice(0, 6)

    return (
        <div className=" w-5/6 mx-auto my-14">
            <SectionHeader
                title="Study Sessions"
                description="Unlock your potential through focused study sessions where knowledge transforms into understanding."
            ></SectionHeader>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
                {
                    displayCards.map(session => <SessionCard key={session._id} session={session}></SessionCard>)
                }
            </div>
            <div className=" card-actions justify-center my-5">
                <Link className=" btn btn-neutral font-semibold text-xl ">View More</Link>
            </div>

        </div>
    );
};

export default StudySection;