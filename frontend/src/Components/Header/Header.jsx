import { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import profilepic from '../../assets/images/faq-img.png';
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';

// Navigation Links
const navLink = [
  {
    path: '/home/',
    display: 'Home',
  },
  {
    path: '/doctors/',
    display: 'Doctors',
  },
  {
    path: '/services/',
    display: 'Services',
  },
  {
    path: '/contact/',
    display: 'Contact',
  },
  {
    path: 'https://healersquad.netlify.app/',
    display: 'Nearby',
  },
  {
    path: '/book/',
    display: 'Book Appointment',
  },
  {
    path: 'https://buy.stripe.com/test_6oE1573clcXM4SYbII',
    display: 'Payment',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const navigate = useNavigate();

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  // Handle navigation based on user role
  const handleProfileClick = () => {
    if (role === 'doctor') {
      navigate('/doctors/profile/me');
    } else if (role === 'patient') {
      navigate('/users/profile/me');
    }
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-indigo-200 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* ================ Logo =============== */}
        <div className="logo">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* ================ Menu =============== */}
        <nav ref={menuRef} className="hidden md:flex space-x-8">
          <ul className="flex items-center space-x-8">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary text-lg font-semibold"
                      : "text-gray-700 hover:text-primary text-lg font-medium"
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ============== Profile/Right Section ============== */}
        <div className="flex items-center space-x-6">
          {token && user ? (
            <div
              className="profile flex items-center space-x-3 cursor-pointer"
              onClick={handleProfileClick}
            >
              <figure className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={profilepic}
                  className="w-full h-full object-cover"
                  alt="User Profile"
                />
              </figure>
              <span className="text-lg font-semibold text-gray-700">
                {user.name || "User"}
              </span>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-blue-500 py-2 px-6 text-white font-semibold rounded-full hover:bg-blue-600 transition-all">
                Login
              </button>
            </Link>
          )}

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className="md:hidden">
        <ul className="flex flex-col space-y-4 p-4 bg-white shadow-lg">
          {navLink.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary text-lg font-semibold"
                    : "text-gray-700 hover:text-primary text-lg font-medium"
                }
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
