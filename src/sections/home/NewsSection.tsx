// components/sections/NewsHighlights.tsx
import { useState } from 'react';
import { motion } from 'framer-motion'

// Import your images
import news1 from '../../assets/news.jpg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news.jpg';
import news4 from '../../assets/news.jpg';
import news5 from '../../assets/news2.jpg';
import pp from '../../assets/pp.jpeg'
import { Link } from 'react-router-dom';

interface NewsProps {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  content?: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  date: string;
  category: string;
}

const NewsHighlights = () => {

   const news: NewsProps[] = [
    {
      id: '1',
      slug: 'benefits-of-organic-eggs',
      image: news1,
      title: 'The Health Benefits of Organic Eggs',
      description: 'Discover why organic eggs are becoming the preferred choice for health-conscious consumers.',
      content: `
        <h2>Why Choose Organic Eggs?</h2>
        <p>Organic eggs have become increasingly popular among health-conscious consumers, and for good reason. These eggs come from hens that are raised according to strict organic farming standards, which means they have access to outdoor spaces, are fed organic feed, and are not treated with antibiotics or hormones.</p>

        <h2>Nutritional Advantages</h2>
        <p>Research shows that organic eggs contain significantly higher levels of omega-3 fatty acids compared to conventional eggs. They also have more vitamins A, E, and D. The improved nutritional profile is a direct result of the hens' diet and living conditions.</p>

        <h3>Key Nutritional Benefits:</h3>
        <ul>
          <li>25% more omega-3 fatty acids</li>
          <li>Higher levels of vitamin E</li>
          <li>Better ratio of omega-3 to omega-6 fatty acids</li>
          <li>Rich in antioxidants like lutein and zeaxanthin</li>
        </ul>

        <h2>Better Taste and Quality</h2>
        <p>Many consumers report that organic eggs have a richer, more vibrant yolk color and better taste. This is attributed to the varied diet of organic hens, which includes grass, insects, and organic grains.</p>

        <h2>Environmental Impact</h2>
        <p>Choosing organic eggs also means supporting sustainable farming practices. Organic farms typically have better waste management systems, use renewable energy, and contribute less to environmental pollution.</p>

        <h2>Best Egg COOP's Commitment</h2>
        <p>At Best Egg COOP, we are proud to maintain organic certification for all our products. Our member farmers follow strict organic guidelines to ensure you receive the highest quality eggs while supporting sustainable agriculture.</p>

        <h2>How to Identify Quality Organic Eggs</h2>
        <p>When shopping for organic eggs, look for:</p>
        <ul>
          <li>Certified organic labels</li>
          <li>Information about the farm or producer</li>
          <li>Bright, firm yolks</li>
          <li>Clean, intact shells</li>
          <li>Fresh date stamps</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Organic eggs offer superior nutrition, better taste, and peace of mind knowing you're supporting ethical and sustainable farming practices. Whether you're looking to improve your diet or make more environmentally conscious choices, organic eggs are an excellent option.</p>
      `,
      author: 'Dr. Sarah Johnson',
      authorBio: 'Dr. Sarah Johnson is a nutritionist with over 15 years of experience in sustainable agriculture and organic food systems.',
      authorImage: pp,
      date: 'December 15, 2024',
      category: 'Health & Nutrition',
    },
    {
      id: '2',
      slug: 'sustainable-egg-farming',
      image: news2,
      title: 'Sustainable Practices in Modern Egg Farming',
      description: 'Explore how Best Egg COOP implements sustainable farming practices to protect the environment while maintaining high production standards. From renewable energy to waste management, discover our commitment to eco-friendly operations and how we contribute to environmental conservation while producing quality eggs.',
      author: 'Rajesh Kumar',
      date: 'December 10, 2024',
      category: 'Sustainability',
    },
    {
      id: '3',
      slug: 'cooperative-success-story',
      image: news3,
      title: 'How Our Cooperative Changed Lives',
      description: 'Read inspiring stories from our member families who have transformed their livelihoods through cooperative membership. Learn how collective action, fair pricing, and community support have created economic opportunities and improved living standards for hundreds of families in our region.',
      author: 'Sunita Sharma',
      date: 'December 5, 2024',
      category: 'Success Stories',
    },
    {
      id: '4',
      slug: 'egg-quality-standards',
      image: news4,
      title: 'Understanding Egg Quality and Grading',
      description: 'Learn about the comprehensive quality control measures that ensure every egg meets our high standards. From collection to packaging, understand the grading process, freshness indicators, and how we maintain consistent quality across all our products to deliver the best to our customers.',
      author: 'Anil Thapa',
      date: 'November 28, 2024',
      category: 'Quality Control',
    },
    {
      id: '5',
      slug: 'poultry-nutrition-guide',
      image: news5,
      title: 'Complete Guide to Poultry Nutrition',
      description: 'A comprehensive guide for producers on optimal poultry nutrition to maximize egg production and bird health. Learn about feed composition, nutritional requirements at different life stages, and how proper nutrition directly impacts egg quality, production rates, and overall flock health.',
      author: 'Dr. Priya Rai',
      date: 'November 20, 2024',
      category: 'Farming Tips',
    },
    {
      id: '6',
      slug: 'digital-transformation',
      image: news5,
      title: 'Digital Transformation in Agriculture',
      description: 'Discover how technology is revolutionizing the cooperative egg industry. From mobile apps for daily production tracking to real-time analytics and automated reporting, learn how digital tools are making farming more efficient, transparent, and profitable for our cooperative members.',
      author: 'Ramesh Gurung',
      date: 'November 15, 2024',
      category: 'Technology'
    }
  ];

  const [selectedNews, setSelectedNews] = useState<NewsProps>(news[0]);

  return (
    <div className="bg-background py-12 sm:py-16 md:py-20">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
        {/* Header Section */}
        <div className='mb-6 sm:mb-8 md:mb-10'>
          <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 md:mb-6'>
            <span className='text-primaryDark'>News </span>&
            <span className='text-primary'> Highlights</span>
          </div>
          <div className='text-sm sm:text-base text-secHeader font-medium'>
            Stay updated with our latest news and events
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4">
          {/* Left Side - Main Featured Card */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <NewsMainCard
              title={selectedNews.title}
              image={selectedNews.image}
              date={selectedNews.date}
              description={selectedNews.description}
              link={selectedNews.link}
            /> */}
             <div className="bg-White rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden group">
        <img 
          src={selectedNews.image} 
          alt={selectedNews.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-lg shadow-md">
          <div className="text-xs font-medium">{selectedNews.date}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
          {selectedNews.title}
        </h3>

        {/* Description with truncation */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed  flex-1">
          {selectedNews.description.length > 150 
            ? `${selectedNews.description.substring(0, 200)}...` 
            : selectedNews.description
          }
        </p>

        {/* See More Button */}
        <Link
          // href={selectedNews.link}
          to={`/news/${selectedNews.slug}`}
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary to-primaryDark text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:gap-3 w-fit text-sm"
        >
          <span>See Full Story</span>
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
          </motion.div>

          {/* Right Side - List of Small Cards */}
          <motion.div 
            className="lg:col-span-1 space-y-4 md:space-y-3"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {news.slice(0, 4).map((news) => {
              let isActive = selectedNews.id === news.id;
              return(

              <div
              key={news.id}
                onClick={() => setSelectedNews(news)}
                className={`bg-White rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${isActive ? 'ring-2 ring-primary shadow-xl' : ''}
      }`}
              >
                <div className="flex gap-3 md:gap-4 p-3 md:p-4">
                  {/* Image */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden group">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    {/* Date */}
                    <div className="text-[10px] md:text-xs text-primary font-semibold mb-1 md:mb-2">
                      {news.date}
                    </div>

                    {/* Title with truncation */}
                    <h4 className="text-xs md:text-sm font-bold text-gray-900 line-clamp-2 hover:text-primary transition-colors leading-tight">
                      {news.title.length > 60
                        ? `${news.title.substring(0, 60)}...`
                        : news.title
                      }
                    </h4>
                  </div>
                </div>
              </div>
            )})}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewsHighlights;