// Images
import { motion } from 'framer-motion'
import news1 from '../../assets/news.jpg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news3.jpg';
import team from '../../assets/team.jpg';
//components
import { ButtonFill } from '../../components/ui/button';

const StorySection = () => {
  return (
    <>
          {/* Introduction Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primaryDark">Our</span> Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">
                  <span className="text-2xl font-bold text-primary">Best Egg Ltd.</span> Dharan Municipality Ward No. 4 
                  was established under Jhapa Cooperative Act 2048 and Cooperative Rules 2049 on 14th Shrawan 2069, 
                  duly registered by Division Cooperative Office Bhadrapur Jhapa with the Registration No. 3/1/7 (652) 069/070.
                </p>
                <p className="text-base sm:text-lg">
                  The three pillars of economic development adopted by the country are government, private, and cooperatives. 
                  In an environment where the cooperative sector is being accepted as the backbone of economic development by 
                  the state, we are using the opportunities provided by it to reduce the economic deprivation in the society 
                  by making members of different castes, regions, and communities work together.
                </p>
                <p className="text-base sm:text-lg">
                  Our cooperative is built on the principles of mutual support, democratic control, and sustainable practices. 
                  We believe in empowering local farmers and families through collective action, modern agricultural techniques, 
                  and fair trade practices.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={news1} 
                  alt="Best Egg COOP Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-White rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
                <p className="text-primary font-bold text-3xl mb-1">2069</p>
                <p className="text-gray-600 text-sm">Year Established</p>
              </div>
            </motion.div>
          </div>

          {/* Additional Images Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={news2} alt="Our Facilities" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={news3} alt="Community Events" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={team} alt="Our Team" className="w-full h-64 object-cover" />
            </div>
          <div className='flex items-center justify-center lg:justify-start'>
          <ButtonFill content='View Gallery' />
          </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default StorySection