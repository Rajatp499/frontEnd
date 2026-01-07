// pages/services/TrackProductionPage.tsx
import { motion } from 'framer-motion';
import HeroSection from '../../components/layout/HeroSection';
import { TrendingUp, Calendar, Database, Bell, BarChart3, AlertCircle } from 'lucide-react';
import { FeatureTextCard } from '../../components/ui/card';
import CallToAction from '../../components/layout/CallToAction';


const TrackProductionPage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Daily Production Entry",
      description: "Producers can easily record daily egg production with simple mobile or web interface.",
      // color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Batch Tracking",
      description: "Track production batches, monitor performance, and identify trends across different batches.",
      // color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Real-time Monitoring",
      description: "View live production statistics, track daily targets, and monitor overall performance.",
      // color: "from-purple-500 to-purple-600"
    },
    {
      icon: AlertCircle,
      title: "Mortality Tracking",
      description: "Record and monitor poultry mortality rates to maintain health standards and quality control.",
      // color: "from-red-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Feed Usage Record",
      description: "Track feed consumption patterns to optimize costs and improve production efficiency.",
      // color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Receive alerts for production anomalies, daily submission reminders, and important updates.",
      // color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    "Eliminate manual paperwork and data entry errors",
    "Access production history anytime, anywhere",
    "Monitor individual and collective performance",
    "Identify low-performing batches quickly",
    "Optimize feed and resource allocation",
    "Generate automatic reports for stakeholders"
  ];

  return (
    <div className="bg-background">
      <HeroSection 
        heading="Track Production" 
        subHeading="Monitor and manage your egg production with precision and ease."
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-primaryDark">Digitize Your</span> Production Records
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our production tracking system transforms how you monitor and manage egg production. 
              Say goodbye to paper records and hello to real-time insights, accurate data, and 
              streamlined operations.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <FeatureTextCard index={index} icon={feature.icon} title={feature.title} text={feature.description} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-primaryDark">Key</span> Benefits
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-primary to-primaryDark rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6">
                {[
                  { step: "1", text: "Producer logs into mobile/web app daily" },
                  { step: "2", text: "Enter number of eggs collected" },
                  { step: "3", text: "System auto-calculates total production" },
                  { step: "4", text: "Data syncs to central dashboard instantly" },
                  { step: "5", text: "Admin monitors all producers in real-time" }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0 font-bold">
                      {item.step}
                    </div>
                    <p className="text-orange-50 pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction title='Ready to Digitize Your Production?' text='Join hundreds of producers already benefiting from automated tracking and real-time insights.' button='Get Started Today' />
    </div>
  );
};

export default TrackProductionPage;