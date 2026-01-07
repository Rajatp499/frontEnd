import React from "react";
import { Link } from 'react-router-dom';
//icons
import { FaStar } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import { Calendar, User, ArrowRight } from 'lucide-react';

//
import { motion } from 'framer-motion'


//FEATURE CARD WITH ONLY ICON
interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  onClick?: () => void;
  text?: string;
  isActive?: boolean;
  index:number;
}
export default function FeatureCard({
  index,
  icon: Icon,
  className,
  onClick,
  text,
  isActive
}: FeatureCardProps) {

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`bg-background py-6 md:py-8 px-6 md:px-12 rounded-md hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-300 ${isActive ? 'ring-2 ring-primary shadow-lg' : ''
        } ${className}`}
      onClick={onClick}
    >
      <Icon className="w-16 h-16 md:w-20 md:h-20 text-primaryDark mb-4 mx-auto" />

      {/* Text visible only on mobile/tablet (hidden on desktop) */}
      {text && (
        <p className="block lg:hidden text-sm md:text-base text-gray-700 text-center leading-relaxed mt-4">
          {text}
        </p>
      )}
    </motion.div>
  );
}

// PRODUCT CARD
interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  currency?: string;
  onBuyClick?: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  currency = '₨',
  onBuyClick
}) => {
  return (
    <div className="relative w-full max-w-[200px] sm:max-w-sm bg-White rounded-lg sm:rounded-xl md:rounded-2xl border border-orange-200 sm:border-2 p-2 sm:p-3 md:p-6 shadow-md sm:shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto">
      {/* Decorative Background Elements */}
      <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 md:top-2 md:right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-12 md:h-12 bg-orange-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-1 left-1 sm:bottom-1.5 sm:left-1.5 md:bottom-2 md:left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-8 md:h-8 bg-yellow-100 rounded-full opacity-50"></div>

      {/* Image Container */}
      <div className="relative mb-2 sm:mb-3 md:mb-4">
        {/* linear Circle Background */}
        <div className="w-full aspect-square bg-linear-to-br from-orange-50 via-yellow-50 to-orange-100 rounded-full flex items-center justify-center p-1.5 sm:p-2 md:p-4 shadow-inner">
          {/* White Inner Circle */}
          <div className="w-full h-full bg-White rounded-full flex items-center justify-center shadow-md sm:shadow-lg relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-linear-to-br from-transparent via-orange-200 to-transparent"></div>
            <img
              src={image}
              alt={title}
              className="w-3/4 h-3/4 object-contain drop-shadow-md sm:drop-shadow-lg md:drop-shadow-xl relative z-10"
            />
          </div>
        </div>

        {/* Price Badge with Star */}
        <div className="absolute -bottom-1.5 -right-1 sm:-bottom-2 sm:-right-1.5 md:-bottom-4 md:-right-3 transform hover:rotate-12 transition-transform duration-300">
          <div className="relative">
            <FaStar className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-orange-400 drop-shadow-lg" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[6px] sm:text-[7px] md:text-[10px] font-bold text-White drop-shadow">{currency}</span>
              <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-Black leading-none text-White drop-shadow-md">{price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Title with decorative line */}
      <div className="text-center mt-3 sm:mt-4 md:mt-8 mb-2 sm:mb-3 md:mb-6">
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-1 sm:mb-1.5 md:mb-2">
          <div className="h-px w-2 sm:w-3 md:w-6 bg-linear-to-r from-transparent to-orange-300"></div>
          <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-orange-400 rounded-full"></div>
          <div className="h-px w-2 sm:w-3 md:w-6 bg-linear-to-l from-transparent to-orange-300"></div>
        </div>
        <p className="text-gray-800 font-bold text-[10px] sm:text-xs md:text-base lg:text-lg tracking-wide">
          {title}
        </p>
      </div>

      {/* Buy Button */}
      <div className="flex justify-center">
        <button
          onClick={onBuyClick}
          className="relative px-3 sm:px-4 md:px-8 py-1 sm:py-1.5 md:py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-White font-bold rounded sm:rounded-md md:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg hover:from-primaryDark hover:to-primaryDark transform hover:-translate-y-1 transition-all duration-300 text-[9px] sm:text-[10px] md:text-sm overflow-hidden group"
        >
          <span className="relative z-10">see price history</span>
          <div className="absolute inset-0 bg-White opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Quality Badge */}
      <div className="mt-1.5 sm:mt-2 md:mt-4 flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2 text-[8px] sm:text-[9px] md:text-xs text-gray-500">
        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <span className="font-medium">Fresh & Organic</span>
      </div>
    </div>
  );
};

//WORDS CARD
interface WordsCardProps {
  author: string;
  profile: string;
  position: string;
  text: string;
}
const WordsCard = ({ author, profile, position, text }: WordsCardProps) => {
  return (
    <div className="bg-White rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 min-w-xl max-w-2xl">
      {/* Quote Icon */}
      <div className="flex justify-start mb-4">
        <FaQuoteRight className="text-primary text-4xl" />
      </div>

      {/* Text Content */}
      <div className="mb-6 sm:mb-8">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">
          {text}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt={author}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary shadow-md"
          />
        </div>

        {/* Author Details */}
        <div className="flex-1 text-left">
          <h4 className="text-gray-900 font-bold text-sm sm:text-base">
            {author}
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm">
            {position}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="hidden sm:block w-8 h-8 bg-linear-to-br from-primary to-primaryDark rounded-full opacity-20"></div>
      </div>
    </div>
  )
}


// FEATURE CARD WITH ICON + TEXT
interface FeatureTextCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  index: number;

}
const FeatureTextCard = ({ icon: Icon, title, text, index }: FeatureTextCardProps) => {
  // console.log(Icon)
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-White rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-14 h-14 bg-linear-to-br bg-primary rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-7 h-7 text-White" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </motion.div>
  )
}

//BLOG CARD
// components/ui/BlogCard.tsx

interface articleCardProps {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category?: string;
  page: string;
  animated?: boolean;
  index:number;
}

const ArticleCard: React.FC<articleCardProps> = ({
  slug,
  index,
  image,
  title,
  description,
  author,
  date,
  category,
  page,
  animated = true
}) => {
  // Slice description to 100 words
  const slicedDescription = description.split(' ').slice(0, 20).join(' ') + (description.split(' ').length > 20 ? '...' : '');

  const CardWrapper = animated ? motion.div : 'div';
  const animationProps = animated ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: index * 0.1 }
  } : {};

  return (
    <CardWrapper
      {...animationProps}
      className="bg-White rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image Section */}
      <Link to={`/${page}/${slug}`} className="block relative overflow-hidden h-56 sm:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-br from-Black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 bg-primary text-White px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
        )}
      </Link>

      {/* Content Section */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-secHeader mb-3">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>

        </div>

        {/* Title */}
        <Link to={`/${page}/${slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {slicedDescription}
        </p>

        {/* Read More Button */}
        <Link
          to={`/${page}/${slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 group/link"
        >
          <span>See Full Story</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </CardWrapper>
  );
};
export { ProductCard, WordsCard, FeatureTextCard, ArticleCard };