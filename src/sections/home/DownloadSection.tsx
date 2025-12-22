//images
import mobile from '../../assets/download.png'

//icons
import { BsQrCode } from "react-icons/bs";


const Download = () => {
  return (
   <div className='bg-White py-10 sm:py-16 md:py-20'>
  <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65'>
    <div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-4 items-center'>
      {/* Left Side - Mobile Image */}
      <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
        <div className='relative w-64 sm:w-80 md:w-96 lg:w-full max-w-md'>
          <img 
            src={mobile} 
            alt="Mobile Banking App"
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 drop-shadow-2xl" 
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className='w-full lg:w-1/2 p-4 sm:p-6 md:p-8 text-center lg:text-left'>
        {/* Main Heading */}
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-Black mb-6 sm:mb-8 md:mb-10 leading-tight'>
          Manage your Digital Payments{' '}
          <span className='text-primaryDark'>Anytime, Anywhere.</span>
        </h2>

        {/* Subheading */}
        <h3 className='text-xl sm:text-2xl md:text-2xl font-semibold text-Black mb-2 sm:mb-3'>
          Download our mobile banking App!
        </h3>

        {/* Description */}
        <p className='text-base sm:text-lg md:text-xl text-secHeader mb-6 sm:mb-8 md:mb-4'>
          Your all-in-one mobile banking app for seamless financial control.
        </p>

        {/* QR Code Section */}
        <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 p-6 sm:p-8'>
          <BsQrCode className='text-9xl sm:text-8xl md:text-9xl flex-shrink-0' />
          <div className='text-center sm:text-left'>
            <p className='text-base sm:text-lg md:text-xl font-medium text-Black'>
              Scan the link to get the mobile app
            </p>
            <p className='text-sm text-secHeader mt-2'>
              Available on iOS and Android
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Download