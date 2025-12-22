//components
import { FeatureTextCard } from "../../components/ui/card";

interface objective{
 icon: React.ComponentType<{ className?: string }>;
    title:string;
    description:string;
    color?:string;
}
interface ObjectivesSectionProps{
    objectives: objective[];
}
const ObjectiveSection = ({objectives}: ObjectivesSectionProps) => {
  return (
    <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
            <span className="text-primaryDark">Our</span> Objectives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {objectives.map((objective, index) => (
              // <div
              //   key={index}
              //   className="bg-White rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              // >
              //   <div className="text-4xl mb-4">{objective.icon}</div>
              //   <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
              //   <p className="text-gray-600 leading-relaxed text-sm">{objective.description}</p>
              // </div>
               <FeatureTextCard index={index} icon={objective.icon} title={objective.title} text={objective.description} color={objective.color} />

            ))}
          </div>
        </div>
      </section>
  )
}

export default ObjectiveSection