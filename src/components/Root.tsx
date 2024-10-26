import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import PageNavigator from './PageNavigator';

export default function Root() {
  return (
    <>
      <Navbar />
      <PageNavigator />
      <Outlet />
      <Footer />
    </>
  );
}
