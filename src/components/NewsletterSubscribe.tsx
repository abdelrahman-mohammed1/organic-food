import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import Facebook from '../assets/icons/Facebook.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Patreon from '../assets/icons/Patreon.svg';

export default function NewsletterSubscribe() {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };
  return (
    <section className="mainPadding py-10 gap-10 flex max-lg2:flex-wrap items-center justify-between bg-[#F7F7F7]">
      <div>
        <h2 className="text-body-xxl font-600">Subcribe our Newsletter</h2>
        <p className="text-body-small font-400 text-gray-400 pt-1 max-w-[500px]">
          Stay fresh with the latest organic deals and healthy tips! Subscribe
          to our newsletter for exclusive offers, new arrivals, and wellness
          inspiration.
        </p>
      </div>
      <form
        onSubmit={handleSubscribe}
        className="rounded-full bg-white flex flex-grow max-h-[50px]"
      >
        <label htmlFor="email" id="newsletter-heading" className="sr-only">
          Subscribe to our Newsletter
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your email address"
          className="flex-grow pl-6 pr-10 max-sm:text-xs rounded-full outline-none"
        />
        <button
          aria-label="Subscribe"
          className="text-body-medium font-semibold bg-primary text-white rounded-full px-5 sm:px-10 py-4 outline-none -ml-5"
        >
          Subscribe
        </button>
      </form>
      <div className="flex gap-4 flex-grow sm2:flex-grow-0 justify-center">
        <Link to="https://web.facebook.com/" target="_blank">
          <Icon
            src={Facebook}
            alt="Facebook"
            className="rounded-full bg-primary p-1 min-w-[26px] aspect-square"
          />
        </Link>
        <Link to="https://twitter.com/" target="_blank">
          <Icon
            src={Twitter}
            alt="Twitter"
            className="min-w-[26px] aspect-square"
          />
        </Link>
        <Link to="https://www.patreon.com/" target="_blank">
          <Icon
            src={Patreon}
            alt="Patreon"
            className="min-w-[26px] aspect-square"
          />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <Icon
            src={Instagram}
            alt="Instagram"
            className="min-w-[26px] aspect-square"
          />
        </Link>
      </div>
    </section>
  );
}
