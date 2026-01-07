// pages/NewsDetailPage.tsx
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ArticleCard } from '../../components/ui/card';

// Import images
import blog1 from '../../assets/news3.jpg';
import blog2 from '../../assets/news2.jpg';
import blog3 from '../../assets/news.jpg';
import blog4 from '../../assets/news3.jpg';
import blog5 from '../../assets/news2.jpg';
import blog6 from '../../assets/news.jpg';

// import blog3 from '../assets/blog3.png';
import pp from '../../assets/pp.jpeg'

interface newsProps {
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

const NewsDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();

    // In real app, fetch blog by slug from API
    const newsData: newsProps[] = [
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
        // Add more blog details here...
    ];

    const news = newsData.find(n => n.slug === slug);

    if (!news?.content) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">News Not Found</h2>
                    <Link to="/news" className="text-primary hover:underline">
                        ← Back to News
                    </Link>
                </div>
            </div>
        );
    }

    // Related blogs (exclude current)
    const relatedNews = newsData.filter(n => n.id !== news.id).slice(0, 3);

    return (
        <div className="bg-background">
            {/* Hero Image */}
            <div className="relative h-96 sm:h-140 overflow-hidden">
                <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/60" />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-16 lg:p-20 ">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            {news.category}
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            {news.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{news.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{news.date}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="py-16 sm:py-20">
                <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65 ">
                    {/* Blog Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="prose prose-lg max-w-none mb-12"
                        dangerouslySetInnerHTML={{ __html: news.content }}
                    />



                    {/* Share Section */}
                    <div className="border-t border-b border-gray-200 py-6 my-12">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Share this article
                            </h3>
                            <div className="flex gap-3">
                                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg mb-12">
                        <div className="flex items-start gap-6">
                            <img
                                src={news.authorImage}
                                alt={news.author}
                                className="w-20 h-20 rounded-full object-cover shrink-0"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">About {news.author}</h3>
                                <p className="text-gray-600 leading-relaxed">{news.authorBio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Blogs */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        <span className="text-primaryDark">Related</span> Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedNews.map((news,index) => (
                            <ArticleCard key={news.id} page='news' index={index} {...news} animated />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsDetailPage;