//images
import LOGO from '../../assets/egg_logo.png'
import Nepal from '../../assets/nepal.png'
//icons
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Header = () => {
  return (
    <div className='bg-linear-to-r from-primary to-primaryDark h-16 sm:h-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-65'>
        <div className='flex w-full h-full justify-between items-center'>
            {/* Logo */}
            <div className='shrink-0'>
                <img 
                    src={LOGO} 
                    alt="Logo"
                    className='h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20' 
                />
            </div>
            
            {/* Social Icons */}
            <div className='flex justify-end items-center gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl text-White'>
                <FaFacebook className='cursor-pointer hover:opacity-80 transition' />
                <FaSquareInstagram className='cursor-pointer hover:opacity-80 transition' />
                <IoLogoYoutube className='cursor-pointer hover:opacity-80 transition' />
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