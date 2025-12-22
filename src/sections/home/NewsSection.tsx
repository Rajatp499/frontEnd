// components/sections/NewsHighlights.tsx
import { useState } from 'react';

// Import your images
import news1 from '../../assets/news.jpg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news.jpg';
import news4 from '../../assets/news.jpg';
import news5 from '../../assets/news2.jpg';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
  link: string;
}

const NewsHighlights = () => {
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "RCEF COOP CARD LAUNCHING PROGRAM AT LA UNION",
      image: news1,
      date: "November 20, 2024",
      description: "Best Egg COOP successfully launched the RCEF COOP Card program in La Union, marking a significant milestone in our commitment to supporting local farmers and cooperative members. This innovative program aims to streamline agricultural support and provide better access to resources for our farming community.",
      link: "#"
    },
    {
      id: 2,
      title: "Annual Cooperative Summit 2024",
      image: news2,
      date: "December 5, 2024",
      description: "Join us for our biggest event of the year where cooperative members, industry leaders, and agricultural experts come together to discuss the future of sustainable farming.",
      link: "#"
    },
    {
      id: 3,
      title: "New Organic Certification Achievement",
      image: news3,
      date: "December 10, 2024",
      description: "Best Egg COOP has achieved full organic certification, ensuring the highest quality standards for all our products and demonstrating our commitment to sustainable practices.",
      link: "#"
    },
    {
      id: 4,
      title: "Community Outreach Program Success",
      image: news4,
      date: "December 12, 2024",
      description: "Our recent community outreach initiative reached over 500 families, providing education on sustainable farming practices and cooperative membership benefits.",
      link: "#"
    },
    {
      id: 5,
      title: "Award for Excellence in Cooperative Management",
      image: news5,
      date: "December 15, 2024",
      description: "Best Egg COOP receives national recognition for outstanding cooperative management and community impact in the agricultural sector.",
      link: "#"
    }
  ];

  const [selectedNews, setSelectedNews] = useState<NewsItem>(newsData[0]);

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
          <div className="lg:col-span-2">
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
        <a 
          href={selectedNews.link}
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
        </a>
      </div>
    </div>
          </div>

          {/* Right Side - List of Small Cards */}
          <div className="lg:col-span-1 space-y-4 md:space-y-3">
            {newsData.slice(0, 4).map((news) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHighlights;