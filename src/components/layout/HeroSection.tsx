
interface HeroSectionProps{
    heading : string;
    subHeading: string;
}
const HeroSection= ({heading, subHeading}: HeroSectionProps) => {
    
  return (
    <>
              <section className="relative bg-linear-to-br from-primary to-primaryDark text-White py-10 sm:py-12 md:py-18">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              {/* About <span className="text-orange-200">Best Egg COOP</span> */}
              {heading}
            </h1>
            <p className="text-md sm:text-xl md:text-xl text-White/80 leading-relaxed">
              {/* Building a sustainable future through cooperative excellence and community empowerment since 2069. */}
              {subHeading}
            </p>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default HeroSection
