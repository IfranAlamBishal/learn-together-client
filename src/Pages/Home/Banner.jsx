import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/0jP6x4J/b-01.jpg" className=" max-h-[600px]"/>
            </div>
            <div>
                <img src="https://i.ibb.co/kytQBqP/b-02.webp" className=" max-h-[600px]"/>
            </div>
            <div>
                <img src="https://i.ibb.co/hFvjtPz/b-03.jpg" className=" max-h-[600px]"/>
            </div>
            <div>
                <img src="https://i.ibb.co/CsCQWM1/b-04.jpg" className=" max-h-[600px]"/>
            </div>
        </Carousel>
    );
};

export default Banner;