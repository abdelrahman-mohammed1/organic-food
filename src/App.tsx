import { Routes, Route } from 'react-router-dom';

import Root from './components/Root';
import Home from './pages/Home/Home';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
}

export default App;
