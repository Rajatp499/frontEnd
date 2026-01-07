import { motion } from 'framer-motion'

interface milestone{
    year: string;
    event:string;
    description:string
}
interface TimelineSectionProps{
    milestones: milestone[]
}
const TimelineSection:React.FC< TimelineSectionProps> = ({milestones}) => {
  return (
    <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primaryDark">Our</span> Journey
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                className="relative pl-8 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              >
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-3.75 top-8 bottom-0 w-0.5 bg-primary/30"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TimelineSection