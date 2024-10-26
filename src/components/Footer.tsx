import { NavLink } from 'react-router-dom';
import NewsletterSubscribe from './NewsletterSubscribe';
import Logo from '../assets/LogoPlant.png';
import Payments from '../assets/Payments.png';

export default function Footer() {
  const navItems = [
    {
      section: 'My Account',
      links: [
        { text: 'My Account', to: '/account' },
        { text: 'Order History', to: '/order-history' },
        { text: 'Shopping Cart', to: '/cart' },
        { text: 'Wishlist', to: '/wishlist' },
      ],
    },
    {
      section: 'Helps',
      links: [
        { text: 'Contact', to: '/contact' },
        { text: 'FAQs', to: '/faqs' },
        { text: 'Terms & Conditions', to: '/terms' },
        { text: 'Privacy Policy', to: '/privacy-policy' },
      ],
    },
    {
      section: 'Proxy',
      links: [
        { text: 'About', to: '/about' },
        { text: 'Shop', to: '/shop' },
        { text: 'Product', to: '/product' },
        { text: 'Track Order', to: '/track-order' },
      ],
    },
    {
      section: 'Categories',
      links: [
        { text: 'Fruit & Vegetables', to: '/shop' },
        { text: 'Meat & Fish', to: '/shop' },
        { text: 'Bread & Bakery', to: '/shop' },
        { text: 'Beauty & Health', to: '/shop' },
      ],
    },
  ];
  return (
    <>
      <NewsletterSubscribe />
      <footer className="mainPadding bg-gray-900 sm:pt-14 pt-7 space-y-16">
        <section className="flex flex-wrap gap-x-5 gap-y-10 justify-between">
          <div className="max-w-[310px] space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Ecobazar Logo"
                loading="lazy"
                className="h-full"
              />
              <h2 className="text-white font-medium text-[32px]">Ecobazar</h2>
            </div>
            <p className="text-gray-500 text-body-small font-400">
              Stay fresh with the latest organic deals and healthy tips! Sign up
              for our newsletter and receive a 10% discount on your first order.
            </p>
            <div className="flex gap-4">
              <p className="text-body-small font-500 text-white border-b-primary border-b-2 pb-1">
                (123) 456-7890
              </p>
              <span className="text-body-medium font-400 text-gray-500  ">
                or
              </span>
              <p className="text-body-small font-500 text-white border-b-primary border-b-2 pb-1">
                Proxy@gmail.com
              </p>
            </div>
          </div>

          {navItems.map(({ section, links }) => (
            <div key={section}>
              <h2 className="text-body-medium font-500 text-white pb-5">
                {section}
              </h2>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.text}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-body-small font-400 text-white'
                          : 'text-body-small font-400 text-gray-400 hover:text-white'
                      }
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="py-7 border-t-gray-800 border-t-2 flex flex-wrap gap-y-5 sm2:justify-between justify-center items-center">
          <p className="text-body-small font-400 text-gray-500">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <img src={Payments} alt="Payments Examples" loading='lazy' />
        </section>
      </footer>
    </>
  );
}
