import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const Tutors = () => {
    return (
        <div className=' mx-5'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/GV6xbV9/how-to-be-teacher-malaysia-feature.png" alt=""  className=' h-[60px] md:h-40 lg:h-64 w-full'/>
                    <div className=' text-white bg-gray-500 text-center p-0.5'>
                        <h2 className=' text-lg md:text-2xl font-bold'>Emmy Devis</h2>
                        <p className='text-xs lg:text-base'>Mathematics</p>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src="https://i.ibb.co/x7P7Fxc/teacher20shortage.webp" alt="" className=' h-[60px] md:h-40 lg:h-64 w-full'/>
                    <div className=' text-white bg-gray-500 text-center p-0.5'>
                        <h2 className=' text-lg md:text-2xl font-bold'>Thomas Conte </h2>
                        <p className=' text-xs lg:text-base'>Computer Architecture</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/0jP6x4J/b-01.jpg" alt="" className=' h-[60px] md:h-40 lg:h-64 w-full'/>
                    <div className=' text-white bg-gray-500 text-center p-0.5'>
                        <h2 className=' text-lg md:text-2xl font-bold'>Isabelle Martin</h2>
                        <p className='text-xs lg:text-base'>Biochemistry</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/92JKw9B/Leaders-and-teachers-1.png" alt="" className='h-[60px] md:h-40 lg:h-64 w-full'/>
                    <div className=' text-white bg-gray-500 text-center p-0.5'>
                        <h2 className=' text-lg md:text-2xl font-bold'>Jacob Andreas</h2>
                        <p className='text-xs lg:text-base'>Artificial Intelligence</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/47SYbVT/Teacher-1920x1080-1920x1080.jpg" alt="" className=' h-[60px] md:h-40 lg:h-64 w-full'/>
                    <div className=' text-white bg-gray-500 text-center p-0.5'>
                        <h2 className=' text-lg md:text-2xl font-bold'>Lisa Elzey</h2>
                        <p className=' text-xs lg:text-base'>Graphic Design</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/kytQBqP/b-02.webp" alt="" className=' h-[60px] md:h-40 lg:h-64 w-full'/>
                    <div className=' text-white bg-gray-500 text-center p-0.5'>
                        <h2 className=' text-lg md:text-2xl font-bold'>Jodi Cooperman</h2>
                        <p className=' text-xs lg:text-base'>Applied Microeconomics</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Tutors;