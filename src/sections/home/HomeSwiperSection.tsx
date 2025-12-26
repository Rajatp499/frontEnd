import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import {motion} from 'framer-motion'

//images
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'

export default function ImageSlider() {
  return (
    <motion.div className=' '
    initial={{opacity:0,}}
    animate={{opacity:1,}}
    transition={{duration:1}}>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide><img src={Image1} alt="Slide 1" className='m-auto' /></SwiperSlide>
      <SwiperSlide><img src={Image2} alt="Slide 2" className='m-auto' /></SwiperSlide>
      <SwiperSlide><img src={Image3} alt="Slide 3" className='m-auto' /></SwiperSlide>
    </Swiper>
    </motion.div>
  );
}