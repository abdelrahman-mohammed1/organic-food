import { NavLink, Link } from 'react-router-dom';

import Icon from '../ui/Icon';
import Telephone from '../assets/icons/Telephone.svg';
import Search from '../assets/icons/Search.svg';
import User from '../assets/icons/User.svg';
import Cart from '../assets/icons/Cart.svg';
import Heart from '../assets/icons/Heart.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiMenuFries } from 'react-icons/ci';

import Logo from '../assets/Logo.png';

export default function Navbar() {
  const handleShowNav = () => {};
  const handleShowSearch = () => {};

  return (
    <nav className="mainPadding py-6 flex justify-between bg-white font-poppins font-500">
      <ul className="max-lg3:hidden flex items-center text-gray-500 text-body-medium gap-7">
        <li className="flex items-center hover:text-gray-900">
          <NavLink to="">Home</NavLink>
        </li>
        <li className="flex items-center hover:text-gray-900">
          <NavLink to="shop">Shop</NavLink>
          <MdKeyboardArrowDown size={24} />
        </li>
        <li className="flex items-center hover:text-gray-900">
          <NavLink to="pages">Pages</NavLink>
          <MdKeyboardArrowDown size={24} />
        </li>
        <li className="flex items-center hover:text-gray-900">
          <NavLink to="Blog">Blog</NavLink>
        </li>
        <li className="flex items-center hover:text-gray-900">
          <NavLink to="about-Us">About Us</NavLink>
        </li>
      </ul>
      <div>
        <Link to="/">
          <img loading="lazy" src={Logo} alt="Ecobazar Logo" />
        </Link>
      </div>
      <ul className="flex items-center text-gray-900 gap-5">
        <li className="max-sm:hidden max-lg3:hidden flex items-center pr-5 gap-2">
          <Icon src={Telephone} alt="Telephone" className="w-8 h-8" />
          (123) 456-7890
        </li>
        <li className="max-sm:hidden flex items-center">
          <button onClick={handleShowSearch}>
            <Icon src={Search} alt="Search" className="w-8 h-8" />
          </button>
        </li>
        <li className="max-sm:hidden ">
          <Link to="/wishlist">
            <Icon src={Heart} alt="Heart" className="w-8 h-8" />
          </Link>
        </li>
        <li className="max-sm:hidden ">
          <Icon src={Cart} alt="Cart" className="w-8 h-8" />
        </li>
        <li className="max-sm:hidden ">
          <Link to="/account">
            <Icon src={User} alt="Account" className="w-8 h-8" />
          </Link>
        </li>
        <li className="lg3:hidden flex items-center">
          <button onClick={handleShowNav}>
            <CiMenuFries className="w-8 h-8" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
