import { useState } from 'react';

//components
import Card from '../../components/ui/card'
//icons
import { GiAchievement } from "react-icons/gi";
import { MdTrendingUp } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { MdEgg } from "react-icons/md";

const Achievements = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
    const cards = [
        {
            icon: GiAchievement,
            text: 'NCBL deposit products exclusively designed for them. These products can help member cooperatives to become financially secure and provide a safety net in case of an emergency in future.'
        },
        {
            icon: MdTrendingUp,
            text: 'NCBL provides credit facility for institutional development, member wealth creation and employment creation at local level.'
        },
        {
            icon: GrAchievement,
            text: "Remittance is being very essential product for the bank and in the context of Nepal, it is playing vital role to sustain the economy. Considering the needs of bank facilitating the member's service. NCBL provides remittance service from different part of world for inward and outward remittance."
        },
        {
            icon: MdEgg,
            text: "NCBL not only engages in funding services, but also provides non-funded services. It is providing bank guarantee to its member to contribute for their growth."
        }
    ];

    return (
        <>
            {/* Cards Section */}
            <div className='bg-white mt-12 md:mt-16 lg:mt-18 py-6 md:py-8 lg:py-10'>
                <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
                        {cards.map((card, index) => (
                            <Card 
                                key={index}
                                icon={card.icon}
                                text={card.text}  // Pass text to card
                                isActive={activeIndex === index}  // Highlight active card
                                onClick={() => setActiveIndex(index)} 
                            />
                        ))}
                    </div>
                </div>
            {/* Text Display Section - Hidden on mobile, visible on desktop */}
            <div className='hidden lg:block w-8/12 xl:w-[60vw] mx-auto text-center py-4 md:py-6 lg:py-2 min-h-20 md:min-h-24 lg:min-h-0 px-4 lg:mt-8'>
                {activeIndex !== null ? (
                    <p className='text-base text-secHeader md:text-lg leading-relaxed animate-fadeIn'>
                        {cards[activeIndex].text}
                    </p>
                ) : (
                  <></>
                )}
            </div>
            </div>

        </>
    )
}

export default Achievements