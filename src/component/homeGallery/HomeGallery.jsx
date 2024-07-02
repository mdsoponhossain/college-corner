import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
const HomeGallery = () => {
    return (
        <div className="mt-5">
            <h1 className="text-4xl text-center">Gallery</h1>
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
                    className="mySwiper h-[500px]"
                >
                    {/* slider-1 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://images.theconversation.com/files/42339/original/2r9q69ts-1393218447.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" alt="" /></SwiperSlide>
                    {/* slider-2 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://images.theconversation.com/files/42339/original/2r9q69ts-1393218447.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" alt="" /></SwiperSlide>
                    {/* slider-3 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://images.theconversation.com/files/42339/original/2r9q69ts-1393218447.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" alt="" /></SwiperSlide>
                    {/* slider-4 */}
                    <SwiperSlide ><img className='w-full h-full' src="https://images.theconversation.com/files/42339/original/2r9q69ts-1393218447.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" alt="" /></SwiperSlide>

                </Swiper>

            </div>

        </div>
    );
};

export default HomeGallery;