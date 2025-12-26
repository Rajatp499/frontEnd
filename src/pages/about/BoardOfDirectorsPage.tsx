import { motion } from 'framer-motion';
//components
import HeroSection from "../../components/layout/HeroSection";
import ImageContainer from '../../components/ui/imageContainer';

// Images - replace with your actual imports
import director1 from '../../assets/pp.jpeg';
import director2 from '../../assets/pp.jpeg';
import director3 from '../../assets/pp.jpeg';
import director4 from '../../assets/pp.jpeg';
import director5 from '../../assets/pp.jpeg';
import director6 from '../../assets/pp.jpeg';

interface Director {
  id: number;
  name: string;
  position: string;
  image: string;
}

const BoardOfDirectorsPage = () => {
  const directors: Director[] = [
    {
      id: 1,
      name: "Mr. Rajesh Kumar",
      position: "Chairman",
      image: director1
    },
    {
      id: 2,
      name: "Mrs. Sunita Sharma",
      position: "Vice Chairman",
      image: director2
    },
    {
      id: 3,
      name: "Mr. Anil Thapa",
      position: "Secretary",
      image: director3
    },
    {
      id: 4,
      name: "Ms. Priya Rai",
      position: "Treasurer",
      image: director4
    },
    {
      id: 5,
      name: "Mr. Ramesh Gurung",
      position: "Board Member",
      image: director5
    },
    {
      id: 6,
      name: "Dr. Maya Poudel",
      position: "Board Member",
      image: director6
    }
  ];


  return (
    <div className="bg-background">
      {/* Hero Section */}
      <HeroSection 
        heading='Board Of Directors' 
        subHeading="Meet the leaders guiding our cooperative towards excellence."
      />

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">

          {/* Directors Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
          >
            {directors.map((director) => (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: director.id * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                {/* Image Container */}
                <ImageContainer name={director.name} image={director.image} position={director.position}  />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BoardOfDirectorsPage;