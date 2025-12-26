import { ProductCard } from '../../components/ui/card'
//images
import Egg from '../../assets/egg.png'
import Crate from '../../assets/crate.png'
import LargeEgg from '../../assets/large_egg.png'

const Rate = () => {
    const date ='5th December, 2025'
    const products = [
    {
      id: 1,
      image: Egg,
      title: 'Per Egg',
      price: 18,
      currency: '₨'
    },
    {
      id: 2,
      image: Crate,
      title: 'Per Crate',
      price: 420,
      currency: '₨'
    },
    {
      id: 3,
      image: LargeEgg,
      title: 'Per Large Egg',
      price: 480,
      currency: '₨'
    }
  ];
    return (
 <div className='bg-White pt-12 sm:pt-16 md:pt-20 mb-8 pb-10 sm:mb-10'>
  <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65'>
    {/* Header Section */}
    <div className='mb-6 sm:mb-8 md:mb-10'>
      <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 md:mb-6'>
        <span className='text-primaryDark'>Today's</span> Rate
      </div>
      <div className='text-sm sm:text-base text-secHeader font-medium'>
        {date}
      </div>
    </div>

    {/* Cards Grid with Side Button */}
    <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center">
      {/* Cards Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            currency={product.currency}
            // onBuyClick={() => handleBuy(product)}
          />
        ))}
      </div>

      {/* Circular See More Button on Right Side */}
      <button 
        className='hidden lg:flex group items-center justify-center w-12 h-12 xl:w-14 xl:h-14 bg-primary hover:bg-primaryDark text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110'
        aria-label="See more products"
      >
        <svg 
          className="w-5 h-5 xl:w-6 xl:h-6 transition-transform duration-300 group-hover:translate-x-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    {/* Mobile See More Button - Below Cards */}
    <div className="mt-6 flex justify-center lg:hidden">
      <button className='group flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primaryDark text-white font-medium rounded-lg transition-all duration-300 hover:gap-3 shadow-md hover:shadow-lg'>
        <span className='text-sm'>See More</span>
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>
    )
}

export default Rate