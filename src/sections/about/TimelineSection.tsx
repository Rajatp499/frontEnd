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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-primaryDark">Our</span> Journey
          </h2>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
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
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TimelineSection