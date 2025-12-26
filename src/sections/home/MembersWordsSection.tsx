import  { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
//Components
import { WordsCard as Card } from '../../components/ui/card'
//images
import profile from '../../assets/profile.png'

const MembersWords = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const CardContent = [{
        id: 1,
        author: 'Rajat Pradhan',
        profile: profile,
        position: 'chairman',
        text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
    },
    {
        id: 2,
        author: 'Rajat Pradhan',
        profile: profile,
        position: 'chairman',
        text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
    },
    {
        id: 3,
        author: 'Rajat Pradhan',
        profile: profile,
        position: 'chairman',
        text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
    }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.offsetWidth * 0.6;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='bg-background py-12 sm:py-16 md:py-20'>
            <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65'>
                {/* Header with Navigation */}
                <div className='flex items-center justify-between mb-6 sm:mb-8 md:mb-10'>
                    <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
                        <span className='text-primaryDark'>Members</span> Word's
                    </div>

                    {/* Navigation Arrows - Desktop only */}
                    <div className='hidden md:flex gap-2'>
                        <button 
                            onClick={() => scroll('left')}
                            className='p-2 lg:p-3 bg-white hover:bg-primary hover:text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300'
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className='p-2 lg:p-3 bg-white hover:bg-primary hover:text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300'
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Cards Container */}
                <div className='relative'>
                    {/* Gradient Fade on Right */}
                    <div className='absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none hidden sm:block'></div>
                    
                    {/* Cards */}
                    <div 
                        ref={scrollRef}
                        className='flex gap-6 sm:gap-8 lg:gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-4'
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {CardContent.map((item) => (
                            <div 
                                key={item.id} 
                                className='flex-shrink-0 min-w-[85vw] sm:min-w-[70vw] md:min-w-xl lg:min-w-2xl'
                            >
                                <Card
                                    profile={item.profile}
                                    position={item.position}
                                    author={item.author}
                                    text={item.text}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile Scroll Indicators */}
                    <div className='flex justify-center gap-2 mt-6 sm:hidden'>
                        {CardContent.map((item) => (
                            <div 
                                key={item.id}
                                className='w-2 h-2 rounded-full bg-primary opacity-30'
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembersWords