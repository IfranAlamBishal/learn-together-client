import { Link } from "react-router-dom";

const SessionCard = ({ session }) => {
    const { _id, title, tutor_name, description } = session

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            <div className="card max-w-96 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/rMyjtVC/5481-jpg-860.jpg" alt="background" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p>{tutor_name}</p>
                    <p className=" font-semibold">{description}</p>
                    <div className="card-actions justify-center mt-3">
                        <Link to={`/details/${_id}`} onClick={scrollUp} className="btn font-semibold">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionCard;