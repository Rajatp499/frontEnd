import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
//components
import HeroSection from "../../components/layout/HeroSection";
import ImageContainer from '../../components/ui/imageContainer';

// Images
import chairmanImg from '../../assets/pp.jpeg';
import directorImg from '../../assets/pp.jpeg';

interface Message {
  id: number;
  name: string;
  position: string;
  image: string;
  message: string;
  imagePosition: 'left' | 'right';
}

const MessagesFromBODPage = () => {
  const messages: Message[] = [
    {
      id: 1,
      name: "Mr. Rajesh Kumar",
      position: "Chairman",
      image: chairmanImg,
      imagePosition: 'left',
      message: `Dear Members and Stakeholders,

It is with great pride and gratitude that I address you today as the Chairman of Best Egg COOP. Since our establishment in 2069, we have witnessed remarkable growth and transformation, not just in our operations, but in the lives of our member families and the communities we serve.

Our cooperative stands as a testament to what can be achieved when individuals come together with a shared vision of prosperity and sustainability. We have successfully created a platform where local farmers and families can thrive through collective action, fair trade practices, and mutual support.

The journey has not been without challenges, but our commitment to cooperative values, transparency, and member welfare has been our guiding light. We have invested significantly in modern farming techniques, quality assurance, and member education programs, ensuring that every member family benefits from our collective success.

I want to thank each member for your trust, dedication, and active participation in our cooperative. Your commitment is what makes Best Egg COOP a model of cooperative excellence. Together, we will continue to build a brighter, more prosperous future for all.

With warm regards and best wishes,
Mr. Rajesh Kumar
Chairman, Best Egg COOP`
    },
    {
      id: 2,
      name: "Mrs. Sunita Sharma",
      position: "Managing Director",
      image: directorImg,
      imagePosition: 'right',
      message: `Dear Valued Members,

As the Managing Director of Best Egg COOP, I am honored to share my thoughts on our journey and the path ahead. Our cooperative has grown from strength to strength, and this success is built on the foundation of trust, hard work, and unwavering commitment from every member.

In my role, I have had the privilege of working closely with our member families, understanding their needs, and implementing programs that directly benefit their livelihoods. Our focus on sustainable practices, quality production, and fair pricing has created a model that not only ensures financial security for our members but also contributes to the broader goal of community development.

We have made significant strides in several key areas. Our organic certification has opened new markets and premium pricing for our products. Our training programs have equipped members with modern farming techniques and financial literacy skills. Our cooperative banking services have provided access to credit and savings opportunities that were previously unavailable to many families.

The strength of our cooperative lies in our people. Every member brings unique skills, experiences, and perspectives that enrich our collective endeavor. Our board meetings, general assemblies, and regular member interactions ensure that every voice is heard and every concern is addressed promptly.

As we move forward, we remain committed to innovation and continuous improvement. We are exploring new technologies, expanding our product range, and seeking partnerships that align with our values and benefit our members. Our goal is to ensure that Best Egg COOP remains not just a business entity, but a true community of families working together for shared prosperity.

I encourage all members to actively participate in our programs, share your ideas, and work together to strengthen our cooperative further. Your success is our success, and together we can achieve remarkable things.

Thank you for your continued trust and support.

Warm regards,
Mrs. Sunita Sharma
Managing Director, Best Egg COOP`
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <HeroSection
        heading='Messages from Board'
        subHeading="Words of wisdom and vision from our leadership."
      />

      {/* Messages Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <div className="space-y-16 md:space-y-24">
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${msg.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } gap-8 lg:gap-8 items-center lg:items-start`}
              >

                {/* Image Section */}
                <div className='lg:w-2/5 xl:w-1/3'>
                <ImageContainer image={msg.image} name={msg.name} position={msg.position} imagePosition={msg.imagePosition} />
                </div>
                {/* Message Section */}
                <div className="w-full lg:w-3/5 xl:w-2/3">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg relative">
                    {/* Quote icon */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                      <h4 className="text-2xl sm:text-3xl font-bold text-primaryDark mb-2">
                        Message from {msg.position}
                      </h4>
                      <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>

                    {/* Message content */}
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                        {msg.message}
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="font-bold text-lg text-gray-900">{msg.name}</p>
                      <p className="text-primary font-medium">{msg.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MessagesFromBODPage;