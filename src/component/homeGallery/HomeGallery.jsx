import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
const HomeGallery = () => {
    return (
        <div className="mt-5 max-w-[1280px] mx-auto">
            <h1 className="text-2xl md:text-4xl text-center">Gallery</h1>
            <div className="flex justify-center">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>
            {/* card container */}
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper h-[350px] md:h-[500px] lg:h-[600px]"
                >
                    {/* slider-1 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://www.hampshirechronicle.co.uk/resources/images/16058116/?type=responsive-gallery-fullscreen" alt="" /></SwiperSlide>
                    {/* slider-2 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://www.falmouthpacket.co.uk/resources/images/6644696/?type=responsive-gallery-fullscreen" alt="" /></SwiperSlide>
                    {/* slider-3 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://img.freepik.com/free-photo/boys-girls-graduation_23-2148522223.jpg" alt="" /></SwiperSlide>
                    {/* slider-4 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://www.edgehill.ac.uk/wp-content/uploads/2023/07/graduation5-1024x576.jpg" alt="" /></SwiperSlide>
                    {/* slider-5 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://live.staticflickr.com/4574/26639342049_5b44c1f468_b.jpg" alt="" /></SwiperSlide>

                </Swiper>

            </div>

        </div>
    );
};

export default HomeGallery;