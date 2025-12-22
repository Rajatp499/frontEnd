//components
//icons
import {Lightbulb, Target} from 'lucide-react'

const VisionMissionSection = () => {
  return (
          <section className="bg-White py-16 sm:py-20 md:py-24">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className={`bg-linear-to-br from-primary to-primaryDark text-White rounded-2xl p-8 sm:p-10 shadow-xl `}>
              <div className="w-16 h-16 bg-White/20 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-orange-100 leading-relaxed text-base sm:text-lg">
                To become the leading cooperative in sustainable agriculture, empowering local communities through innovative farming practices, fair trade, and collective prosperity. We envision a future where every member family achieves economic security and social dignity.
              </p>
            </div>
            {/* Mission */}
            {/* <FeatureTextCard icon={Target} title='Our Mission' text=' To provide quality organic products while supporting our member farmers through education, resources, and fair prices. We are committed to sustainable practices, community development, and creating lasting positive impact in local agriculture.' /> */}
            <div className={`bg-linear-to-br from-primary to-primaryDark text-White rounded-2xl p-8 sm:p-10 shadow-xl `}>
              <div className="w-16 h-16 bg-White/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-orange-100 leading-relaxed text-base sm:text-lg">
                To provide quality organic products while supporting our member farmers through education, resources, and fair prices. We are committed to sustainable practices, community development, and creating lasting positive impact in local agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default VisionMissionSection