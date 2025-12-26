// pages/services/ProducerSellerSystemPage.tsx
import { motion } from 'framer-motion';
import HeroSection from '../../components/layout/HeroSection';
import { 
  Shield,
  Wifi,
  Clock,
  CheckCircle,
} from 'lucide-react';
import CallToAction from '../../components/layout/CallToAction';

const ProducerSellerSystemPage = () => {


  const systemBenefits = [
    {
      title: "User-Friendly Interface",
      description: "Designed for ease of use, even for users with minimal tech experience",
      icon: "👆"
    },
    {
      title: "Mobile-First Design",
      description: "Optimized for mobile devices - works perfectly on any smartphone",
      icon: "📱"
    },
    {
      title: "Offline Capability",
      description: "Record entries offline and sync automatically when connected",
      icon: "🔄"
    },
    {
      title: "Multi-Language Support",
      description: "Available in Nepali and English for better accessibility",
      icon: "🌐"
    },
    {
      title: "Secure & Private",
      description: "Your data is encrypted and protected with industry-standard security",
      icon: "🔒"
    },
    {
      title: "24/7 Availability",
      description: "Access the system anytime, anywhere, from any device",
      icon: "⏰"
    }
  ];

  const appFeatures = [
    {
      category: "For Producers",
      features: [
        "One-tap daily production entry",
        "Photo capture for record keeping",
        "Monthly production calendar view",
        "Payment history and receipts",
        "Rate change notifications",
        "Batch and flock management",
        "Feed usage tracking (optional)",
        "Mortality records"
      ]
    },
    {
      category: "For Sellers",
      features: [
        "Quick sales entry by location",
        "Stock assignment tracking",
        "Revenue calculations",
        "Commission breakdown",
        "Daily sales summary",
        "Location-based reporting",
        "Customer management",
        "Route optimization"
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Wifi,
      title: "Cloud Sync",
      description: "All data syncs to cloud automatically for backup and access anywhere"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Bank-level encryption protects your sensitive information"
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Instant synchronization ensures everyone sees the latest data"
    },
    {
      icon: CheckCircle,
      title: "Reliable Performance",
      description: "Stable system with 99.9% uptime for uninterrupted service"
    }
  ];

  return (
    <div className="bg-background">
      <HeroSection 
        heading="Producer & Seller System" 
        subHeading="Powerful mobile apps designed for producers and sellers to manage operations efficiently."
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
              <span className="text-primaryDark">Mobile Apps for</span> Everyone
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our dedicated mobile applications empower producers and sellers with tools they need 
              to succeed. Simple, fast, and designed for daily use in the field.
            </p>
          </motion.div>

          {/* System Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {systemBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Detailed Features Comparison */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-primaryDark">Complete</span> Feature List
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {appFeatures.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-primaryDark mb-6">{app.category}</h3>
                <ul className="space-y-3">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-primaryDark">Reliable &</span> Secure
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Built with modern technology to ensure reliability, security, and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-linear-br from-gray-50 to-gray-100 rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction title='Ready to Empower Your Team?' text=' Give your producers and sellers the tools they need to succeed. Start digitizing your operations today.' button='Download Apps' />
    </div>
  );
};

export default ProducerSellerSystemPage;