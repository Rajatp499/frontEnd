//images
// import LOGO from '../../assets/egg_logo.png'
import Nepal from '../../assets/nepal.png'
//icons

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


const Header = () => {
    return (
        <div className='bg-linear-to-r from-primary to-primaryDark h-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-65'>
            <div className='flex  w-full h-full justify-between items-center'>

                <div className='flex text-White '>
                    {/* Phone */}

                    <FaPhone className='text-lg sm:text-xl shrink-0' />
                    <a
                        href="tel:+63XXXXXXXXXX"
                        className='text-sm sm:text-base  hover:text-white transition-colors'
                    >
                        &nbsp;+977 9824367429 

                    </a>
                    &nbsp; &nbsp;|&nbsp; Dharan-12, Sunsari

                </div>

                {/* Social Icons */}
                <div className='flex justify-end items-center gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl text-White'>
                    <FaFacebook className='cursor-pointer hover:opacity-80 transition' />
                    <FaInstagram className='cursor-pointer hover:opacity-80 transition' />
                    <FaYoutube className='cursor-pointer hover:opacity-80 transition' />
                    <img
                        src={Nepal}
                        alt="Nepal Flag"
                        className='h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 cursor-pointer hover:opacity-80 transition'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header