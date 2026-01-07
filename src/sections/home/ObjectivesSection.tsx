import { motion } from 'framer-motion'
//photos
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.png'
import photo5 from '../../assets/photo5.png'
import photo6 from '../../assets/photo6.png'

const Objectives = () => {

  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65 mt-10 md:mt-16 lg:mt-20 mb-10"
    >
      <div className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-2'>

        <span className='text-primaryDark'>Our</span> Objectives
      </div>

      <div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10'>
        {/* Left Side - Text Content */}

        <motion.div 
          className="w-full lg:w-[60%] p-4 md:p-6 lg:p-8 bg-background rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className='text-sm md:text-base lg:text-lg leading-relaxed text-gray-700'>
            <span className='text-2xl text-primaryDark'>Best Egg Ltd.</span> Dharan Municipality Ward No. 4 established under Jhapa Cooperative Act 2048
            and Cooperative Rules 2049 on 14th Shrawan 2069 duly registered by Division Cooperative
            Office Bhadrapur Jhapa with the Registration No. 3/1/7 (652) 069/070. The three pillars
            of economic development adopted by the country are government, private and cooperatives.
            In an environment where the cooperative sector is being accepted as the backbone of economic
            development by the state, we are using the opportunities provided by it to reduce the economic
            deprivation in the society by making members of different castes, regions.
          </p>
        </motion.div>

        {/* Right Side - Image Collage */}
        <motion.div 
          className='w-full lg:w-[40%]'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {/* Column 1 - Single tall image */}
            <div className="col-span-1">
              <div className="relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-55 sm:h-65 md:h-70">
                <img
                  src={photo1}
                  alt="Photo 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Column 2 - Two stacked images */}
            <div className="col-span-1 space-y-2 md:space-y-3">
              <div className="relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-26.25 sm:h-31.25 mdh-33.75">
                <img
                  src={photo2}
                  alt="Photo 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-26.25 sm:h-31.25 md:h-33.75">
                <img
                  src={photo3}
                  alt="Photo 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Column 3 - Single tall image */}
            <div className="col-span-1">
              <div className="relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-55 sm:h-65 md:h-70">
                <img
                  src={photo4}
                  alt="Photo 4"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Bottom Row - Two images spanning the full width */}
            <div className="col-span-3 grid grid-cols-2 gap-2 md:gap-3">
              <div className="relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-26.25 sm:h-31.25 mdh-33.75">
                <img
                  src={photo5}
                  alt="Photo 5"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-26.25 sm:h-31.25 mdh-33.75">
                <img
                  src={photo6}
                  alt="Photo 6"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Objectives