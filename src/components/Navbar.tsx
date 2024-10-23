import { NavLink } from 'react-router-dom';

import Icon from '../ui/Icon';
import Telephone from '../assets/icons/Telephone.svg';
import Search from '../assets/icons/Search.svg';
import User from '../assets/icons/User.svg';
import Cart from '../assets/icons/Cart.svg';
import Heart from '../assets/icons/Heart.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Logo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <nav className="mainPadding py-6 flex justify-between bg-white font-poppins font-medium">
      <ul className="flex items-center text-gray-500 text-body-xl gap-7">
        <li className="flex items-center">
          <NavLink to="">Home</NavLink>
        </li>
        <li className="flex items-center">
          <NavLink to="shop">Shop</NavLink>
          <MdKeyboardArrowDown size={24} />
        </li>
        <li className="flex items-center">
          <NavLink to="pages">Pages</NavLink>
          <MdKeyboardArrowDown size={24} />
        </li>
        <li className="flex items-center">
          <NavLink to="Blog">Blog</NavLink>
        </li>
        <li className="flex items-center">
          <NavLink to="about-Us">About Us</NavLink>
        </li>
      </ul>
      <div>
        <img src={Logo} alt="Ecobazar Logo" />
      </div>
      <ul className="flex items-center text-gray-900 gap-5">
        <li className="flex items-center pr-5 gap-2">
          <Icon src={Telephone} alt="Telephone" className="w-8 h-8" />
          (123) 456-7890
        </li>
        <li>
          <Icon src={Search} alt="Search" className="w-8 h-8" />
        </li>
        <li>
          <Icon src={Heart} alt="Heart" className="w-8 h-8" />
        </li>
        <li>
          <Icon src={Cart} alt="Cart" className="w-8 h-8" />
        </li>
        <li>
          <Icon src={User} alt="Profile" className="w-8 h-8" />
        </li>
      </ul>
    </nav>
  );
}
