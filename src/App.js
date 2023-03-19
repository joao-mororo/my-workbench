import Sidebar from './components/sidebar/Sidebar'
import { BiMenu } from 'react-icons/bi';
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function App() {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })
  const location = useLocation()

  return (
    <div className="App">
      {/* {isDesktopOrLaptop ? <Sidebar /> : <Link className='btn-open-menu' to={'menu'}><BiMenu /></Link>} */}
      {isDesktopOrLaptop && <Sidebar />}
      {!isDesktopOrLaptop && location.pathname !== '/menu' && <Link className='btn-open-menu' to={'menu'}><BiMenu /></Link>}
      <Outlet />
    </div>
  );
}

export default App;
