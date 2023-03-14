import Sidebar from './components/sidebar/Sidebar'
import Menu from './components/menu/Menu';
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import './App.css';

function App() {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })

  return (
    <div className="App">
      {isDesktopOrLaptop ? <Sidebar /> : <Menu />}
      <Outlet />
    </div>
  );
}

export default App;
