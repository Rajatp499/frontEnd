//components
import { FeatureTextCard } from "../../components/ui/card";

interface objective{
 icon: React.ComponentType<{ className?: string }>;
    title:string;
    description:string;
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
               <FeatureTextCard  key={index} index={index} icon={objective.icon} title={objective.title} text={objective.description} />

            ))}
          </div>
        </div>
      </section>
  )
}

export default ObjectiveSection