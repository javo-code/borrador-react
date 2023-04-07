import logo from './logo.png';
import './navBar.css'
import '../cartWidget/Contador'
import CartWidget from '../cartWidget/CartWidget'
import Contador from '../cartWidget/Contador';

function NavBar() {
  return (
    <nav className='navBar'>

      <div className='contenedor-logo' >
        <img
          className='logo'
          src={logo}
          alt='logo nueva medicina'
        />
      </div>

      <div className='contenedor-navBar' >
        <ul class='menu'>
          <li><a href='#nutricion'>NUTRICION</a></li>
          <li><a href='#bombas'>BOMBAS DE INFUSION</a></li>
          <li><a href='#descartables'>DESCARTABLES</a></li>
          <li><a href='#descartables'>INGRESAR</a></li>
        </ul>
        
      </div>
      <CartWidget />
      <Contador />
    </nav>
  )
} 

export default NavBar;

