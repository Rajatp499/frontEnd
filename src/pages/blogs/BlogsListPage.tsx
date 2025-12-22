// pages/BlogsPage.tsx
import { useState } from 'react';
import HeroSection from '../../components/layout/HeroSection';
import { ArticleCard } from '../../components/ui/card';

// Import images
import pp from '../../assets/pp.jpeg'
import blog1 from '../../assets/news3.jpg';
import blog2 from '../../assets/news2.jpg';
import blog3 from '../../assets/news.jpg';
import blog4 from '../../assets/news3.jpg';
import blog5 from '../../assets/news2.jpg';
import blog6 from '../../assets/news.jpg';

interface BlogProps {
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

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const blogs: BlogProps[] = [
    {
id: '1',
            slug: 'benefits-of-organic-eggs',
            image: blog1,
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
      image: blog2,
      title: 'Sustainable Practices in Modern Egg Farming',
      description: 'Explore how Best Egg COOP implements sustainable farming practices to protect the environment while maintaining high production standards. From renewable energy to waste management, discover our commitment to eco-friendly operations and how we contribute to environmental conservation while producing quality eggs.',
      author: 'Rajesh Kumar',
      date: 'December 10, 2024',
      category: 'Sustainability',
    },
    {
      id: '3',
      slug: 'cooperative-success-story',
      image: blog3,
      title: 'How Our Cooperative Changed Lives',
      description: 'Read inspiring stories from our member families who have transformed their livelihoods through cooperative membership. Learn how collective action, fair pricing, and community support have created economic opportunities and improved living standards for hundreds of families in our region.',
      author: 'Sunita Sharma',
      date: 'December 5, 2024',
      category: 'Success Stories',
    },
    {
      id: '4',
      slug: 'egg-quality-standards',
      image: blog4,
      title: 'Understanding Egg Quality and Grading',
      description: 'Learn about the comprehensive quality control measures that ensure every egg meets our high standards. From collection to packaging, understand the grading process, freshness indicators, and how we maintain consistent quality across all our products to deliver the best to our customers.',
      author: 'Anil Thapa',
      date: 'November 28, 2024',
      category: 'Quality Control',
    },
    {
      id: '5',
      slug: 'poultry-nutrition-guide',
      image: blog5,
      title: 'Complete Guide to Poultry Nutrition',
      description: 'A comprehensive guide for producers on optimal poultry nutrition to maximize egg production and bird health. Learn about feed composition, nutritional requirements at different life stages, and how proper nutrition directly impacts egg quality, production rates, and overall flock health.',
      author: 'Dr. Priya Rai',
      date: 'November 20, 2024',
      category: 'Farming Tips',
    },
    {
      id: '6',
      slug: 'digital-transformation',
      image: blog6,
      title: 'Digital Transformation in Agriculture',
      description: 'Discover how technology is revolutionizing the cooperative egg industry. From mobile apps for daily production tracking to real-time analytics and automated reporting, learn how digital tools are making farming more efficient, transparent, and profitable for our cooperative members.',
      author: 'Ramesh Gurung',
      date: 'November 15, 2024',
      category: 'Technology'
    }
  ];

  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="bg-background">
      <HeroSection 
        heading="Our Blog" 
        subHeading="Insights, stories, and updates from Best Egg COOP."
      />

      {/* Category Filter */}
      <section className="py-8 sm:py-12 bg-white sticky top-10 lg:top-20 z-40 shadow-sm">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <ArticleCard key={blog.id} {...blog} page='blogs' animated />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No blogs found in this category.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default BlogsPage;