import logo from '../../img/logo.png';
import './navBar.css';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/'>
        <img
          className='logo'
          src={logo}
          alt='logo nueva medicina' />
      </Link> 
      <div className="Categories">
        <NavLink to={`/category/nutrition`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Nutrición Enteral</NavLink>
        <NavLink to={`/category/deponsables`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Artículos Descartales</NavLink>
        <NavLink to={`/category/bombs`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Bombas de Infusión</NavLink>
      </div>
      <CartWidget />
</nav>
  )
} 

export default NavBar;