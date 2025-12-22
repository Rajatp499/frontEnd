//icons
import { HandCoins, Egg, Users, Building,Sprout, ShoppingCart} from 'lucide-react';
//components
import HeroSection from '../../components/layout/HeroSection'
//sections
import StorySection from '../../sections/about/StorySection';
import VisionMissionSection from '../../sections/about/VisionMissionSection';
import ObjectiveSection from '../../sections/about/ObjectiveSection';
import AchievementsSection from '../../sections/about/AchievementsSection';
import TimelineSection from '../../sections/about/TimelineSection';
import CallToAction from '../../components/layout/CallToAction';


const IntroductionPage = () => {
  const objectives = [
    {
      title: "Economic Empowerment",
      description: "Enhance financial security and income generation for all cooperative members through collective action and fair trade practices.",
      icon: HandCoins,
      color: "from-red-500 to-red-600"
    
    },
    {
      title: "Quality Production",
      description: "Maintain highest standards in organic egg production with modern farming techniques and sustainable practices.",
      icon: Egg,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Member Education",
      description: "Provide continuous training and education on best farming practices, financial literacy, and cooperative management.",
      icon: Users,
       color: "from-orange-500 to-orange-600"
    },
    {
      title: "Community Development",
      description: "Support local community growth through infrastructure development, social programs, and welfare initiatives.",
      icon: Building,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Sustainable Practices",
      description: "Promote environmentally friendly farming methods and contribute to ecological conservation and sustainability.",
      icon: Sprout,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Market Access",
      description: "Create reliable market channels and ensure fair prices for member products through cooperative marketing efforts.",
      icon: ShoppingCart,
      color: "from-purple-500 to-purple-600"
    }
  ]

  const milestones = [
    { year: "2069", event: "Best Egg COOP Founded", description: "Established under Jhapa Cooperative Act 2048" },
    { year: "2070", event: "First 100 Members", description: "Reached milestone of 100 cooperative members" },
    { year: "2073", event: "Organic Certification", description: "Achieved full organic certification for all products" },
    { year: "2075", event: "National Recognition", description: "Received excellence award in cooperative management" },
    { year: "2081", event: "500+ Members Strong", description: "Growing community of dedicated farmers and members" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <HeroSection heading='About Best Egg COOP' subHeading='Building a sustainable future through cooperative excellence and community empowerment since 2069.' />

      {/* Story section */}
      <StorySection />

      {/* Vision & Mission Section */}
      <VisionMissionSection />

      {/* Objectives Section */}
      <ObjectiveSection objectives={objectives} />

      {/* Achievements Section */}
     <AchievementsSection />

      {/* History Timeline */}
      <TimelineSection milestones={milestones} />

      {/* Call to Action */}
     <CallToAction title=' Join Our Growing Community' text='Become part of our cooperative and experience the benefits of collective growth, sustainable practices, and community support.' button='Become a Member' />


    </div>
  );
};

export default IntroductionPage;