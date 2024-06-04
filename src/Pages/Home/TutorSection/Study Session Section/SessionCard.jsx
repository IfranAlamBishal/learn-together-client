const SessionCard = ({ session }) => {
    const { title, tutor_name, description } = session
    return (
        <div>
            <div className="card max-w-96 bg-gray-400 text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p>{tutor_name}</p>
                    <p className=" font-semibold">{description}</p>
                    <div className="card-actions justify-center mt-3">
                        <button className="btn font-semibold">Read more</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SessionCard;