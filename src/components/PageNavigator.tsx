import { useLocation } from 'react-router-dom';

export default function PageNavigator() {
  const location = useLocation();

  if (location.pathname === '/') return null;

  return <div className='mainPadding'>PageNavigator</div>;
}
