import { useEffect, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import SessionCard from "../Home/Study Session Section/SessionCard";
import { Helmet } from "react-helmet-async";
import useAxios from "../../Hooks/useAxios";

const AllStudySessions = () => {

    const [spinner, setSpinner] = useState(true);
    const [sessions, setSessions] = useState([]);

    const axiosSecure = useAxios();

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        axiosSecure.get('/approvedSessions')
            .then(res => {
                setSessions(res.data)
            })
    }, [axiosSecure])

    
    return (
        <div>
            <Helmet>
                <title>Learn Together | Study Sessions</title>
            </Helmet>
            <div className="flex justify-center">
                {
                    spinner && <span className="loading loading-infinity w-24"></span>
                }
            </div>
            <div className=" w-5/6 mx-auto pt-28">
                <SectionHeader
                    title='Study Sessions'
                    description='Embark on a journey of knowledge with our Study Sessions, where every session is a step closer to mastery.'>
                </SectionHeader>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
                    {
                        sessions.map(session => <SessionCard key={session._id} session={session}></SessionCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllStudySessions;