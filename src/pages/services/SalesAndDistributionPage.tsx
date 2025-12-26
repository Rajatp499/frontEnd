// pages/services/SalesDistributionPage.tsx
import { motion } from 'framer-motion';
import { ShoppingCart, MapPin, TrendingUp, Calculator, Package, DollarSign, Users, AlertCircle } from 'lucide-react';
//components
import HeroSection from '../../components/layout/HeroSection';
import { FeatureTextCard } from '../../components/ui/card';
import CallToAction from '../../components/layout/CallToAction';

const SalesDistributionPage = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Daily Sales Entry",
      description: "Sellers can quickly record daily sales with intuitive mobile interface from any location.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "Track sales by specific outlets and locations for better distribution insights and planning.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Package,
      title: "Stock Management",
      description: "Monitor stock levels in real-time, track remaining inventory, and prevent stockouts automatically.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calculator,
      title: "Auto Revenue Calculation",
      description: "System automatically calculates daily revenue based on quantities sold and current rates.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: DollarSign,
      title: "Dynamic Pricing",
      description: "Update egg prices in real-time and apply changes across all sales channels instantly.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track top-selling locations, best performers, and identify sales trends over time.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Commission Management",
      description: "Automatically calculate seller commissions based on configurable rates and performance.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: AlertCircle,
      title: "Smart Alerts",
      description: "Receive notifications for low stock, daily submission reminders, and important updates.",
      color: "from-pink-500 to-pink-600"
    }
  ];


  const distributionMetrics = [
    { label: "Sales Outlets", value: "50+", color: "text-blue-600" },
    { label: "Daily Transactions", value: "500+", color: "text-green-600" },
    { label: "Active Sellers", value: "30+", color: "text-purple-600" },
    { label: "Monthly Revenue", value: "₱2M+", color: "text-orange-600" }
  ];

  return (
    <div className="bg-background">
      <HeroSection 
        heading="Sales & Distribution" 
        subHeading="Streamline your sales process and optimize distribution channels."
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
              <span className="text-primaryDark">Revolutionize Your</span> Sales Management
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our sales and distribution system provides complete visibility into your entire sales 
              network. Track every transaction, manage inventory efficiently, and empower your sellers 
              with tools they need to succeed.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {distributionMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              return (
                <FeatureTextCard index={index} icon={feature.icon} title={feature.title} text={feature.description} color={feature.color} />
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA */}
      <CallToAction title='ransform Your Sales & Distribution' text='in cooperative members who have increased sales efficiency by 40% and reduced stock wastage by 60% with our system.' button=' Schedule a Demo' />
    </div>
  );
};

export default SalesDistributionPage;