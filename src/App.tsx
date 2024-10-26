import { Routes, Route } from 'react-router-dom';

import Root from './components/Root';
import Home from './pages/Home/Home';
import Wishlist from './components/Wishlist';
import Page404 from './pages/Page404/Page404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
