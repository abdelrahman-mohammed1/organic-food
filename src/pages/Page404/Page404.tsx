import { Link } from 'react-router-dom';
import Page404Image from '../../assets/Illustration/Page404.svg';

export default function Page404() {
  return (
    <div className="mainPadding text-center flex flex-col justify-center items-center py-20">
      <img src={Page404Image} alt="404 Page Navigate to Home" loading="lazy" />
      <h3 className="text-heading-03 font-600 text-gray-900 pt-8">
        Oops! page not found
      </h3>
      <p className="text-body-medium font-400 text-gray-500 max-w-[600px] py-5">
        This is 404 page please navigate to home and explore our best organic
        and healty food in Ecobazar.
      </p>
      <Link
        to="/"
        className="rounded-full bg-primary text-body-small font-600 text-white py-4 px-7"
      >
        Back to Home
      </Link>
    </div>
  );
}
