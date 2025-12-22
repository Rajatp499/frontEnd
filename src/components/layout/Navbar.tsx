import { useState } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineMenu as Menu } from "react-icons/md";
import { RxCross2 as X } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";

//components
import { ButtonFill } from '../ui/button';

interface NavLinkProps {
  to: string;
  label: string;
}

interface NavBarProps {
  to: string;
  label: string;
  hasDropdown?: boolean;
  subLinks?: NavLinkProps[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const navLinks: NavBarProps[] = [
    { to: '/', label: 'Home' },
    {
      to: '/about',
      label: 'About us',
      hasDropdown: true,
      subLinks: [
        { to: '/about/introduction', label: 'Introduction' },
        { to: '/about/board-of-directors', label: 'Board of Directors' },
        { to: '/about/messages-from-BOD', label: 'Messages from BOD' },
      ]
    },
    {
      to: '/services',
      label: 'Services',
      hasDropdown: true,
      subLinks: [
        { to: '/services/track-production', label: 'Track Production' },
        { to: '/services/sales-and-distribution', label: 'Sales and Distribution' },
        { to: '/services/producer-and-seller-system', label: 'Producer and Seller System' },
        { to: '/services/member-registration', label: 'Member Registration' },
      ]
    },
    { to: '/blogs', label: 'Blogs' },
    { to: '/news', label: 'News' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact us' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const closeSidebar = () => {
    setIsOpen(false);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  return (
    <>
      <nav className={`w-full h-16 md:h-20 shadow-sm sticky top-0 z-50 ${isOpen ? 'bg-black/10' : 'bg-White'}`}>
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65 flex h-full justify-between items-center">

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between items-center flex-1 mr-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <>
                    <button className="hover:text-primary transition-colors duration-200 px-3 py-2 text-sm xl:text-base font-medium flex items-center gap-1">
                      {link.label}
                      <IoChevronDown 
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0  bg-White rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn min-w-[250px]">
                        {link.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.label}
                            to={subLink.to}
                            className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="hover:text-primary transition-colors duration-200 px-3 py-2 text-sm xl:text-base font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            <Link to='signup'>
            <ButtonFill content='Signup' className='px-6' />
            </Link>
            <Link to='login'>
            <ButtonFill content='Login' className='px-6' />
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-White shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex flex-col p-6 space-y-2 pb-32">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.hasDropdown ? (
                <>
                  {/* Expandable Dropdown */}
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="w-full flex items-center justify-between hover:text-primary hover:bg-gray-50 transition-all duration-200 px-4 py-3 rounded-lg text-base font-medium"
                  >
                    <span>{link.label}</span>
                    <IoChevronDown 
                      className={`transition-transform duration-300 ${
                        activeMobileDropdown === link.label ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Mobile Submenu */}
                  {activeMobileDropdown === link.label && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.subLinks?.map((subLink) => (
                        <Link
                          key={subLink.label}
                          to={subLink.to}
                          onClick={closeSidebar}
                          className="block hover:text-primary hover:bg-gray-50 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-600"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.to}
                  onClick={closeSidebar}
                  className="block hover:text-primary hover:bg-gray-50 transition-all duration-200 px-4 py-3 rounded-lg text-base font-medium"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar Buttons */}
        <div className=" bottom-0 left-0 right-0 p-6 border-t border-gray-200 space-y-3 bg-White">
          <ButtonFill content='Signup' className='w-full' onClick={closeSidebar} />
          <ButtonFill content='Login' className='w-full' onClick={closeSidebar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;