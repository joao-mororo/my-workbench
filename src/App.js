import Sidebar from './components/sidebar/Sidebar'
import { BiMenu } from 'react-icons/bi';
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })
  const location = useLocation()

  const notSidebar = ['/menu', '/login']

  return (
    <div className="App">
      {/* {isDesktopOrLaptop ? <Sidebar /> : <Link className='btn-open-menu' to={'menu'}><BiMenu /></Link>} */}
      {isDesktopOrLaptop && !notSidebar.includes(location.pathname) && <Sidebar />}
      {!isDesktopOrLaptop && !notSidebar.includes(location.pathname) && <Link className='btn-open-menu' to={'menu'}><BiMenu /></Link>}
      <Outlet />
    </div>
  );
}

export default App;
