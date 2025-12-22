import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//images
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'

export default function ImageSlider() {
  return (
    <div className=' '>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide><img src={Image1} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src={Image2} alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src={Image3} alt="Slide 3" className='m-auto' /></SwiperSlide>
    </Swiper>
    </div>
  );
}