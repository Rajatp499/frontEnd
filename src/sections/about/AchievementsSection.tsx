import { motion } from 'framer-motion'

const AchievementsSection = () => {
  return (<>
    {/* Achievements Section */}
      <section className="bg-White py-16 sm:py-20 md:py-24">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primaryDark">Our</span> Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-linear-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h4 className="font-bold text-xl text-green-800 mb-2">Organic Certification</h4>
              <p className="text-green-700">
                Achieved full organic certification ensuring highest quality standards for all our products.
              </p>
            </motion.div>
            <motion.div 
              className="bg-linear-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h4 className="font-bold text-xl text-blue-800 mb-2">National Recognition</h4>
              <p className="text-blue-700">
                Received excellence award in cooperative management from the national cooperative federation.
              </p>
            </motion.div>
            <motion.div 
              className="bg-linear-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <h4 className="font-bold text-xl text-purple-800 mb-2">Community Impact</h4>
              <p className="text-purple-700">
                Positively impacted over 1,000 families through employment, training, and support programs.
              </p>
            </motion.div>
            <motion.div 
              className="bg-linear-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <h4 className="font-bold text-xl text-orange-800 mb-2">Sustainable Practices</h4>
              <p className="text-orange-700">
                Leading the region in eco-friendly farming methods and environmental conservation initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      </>
  )
}

export default AchievementsSection