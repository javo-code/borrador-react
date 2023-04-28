import fbIcon from '../../img/facebook.jpg'
import igIcon from '../../img/instagram.jpg'
import twIcon from '../../img/twitter.jpg'
import './footer.css';
  
function Footer() {
  return (
    <footer className='contenedor-footer'>
    <div className='redes'>
      <a 
          href='https//www.facebook.com'
          target='_blank'>
        <img
          className='fbIcon' 
          src={fbIcon} 
          alt='facebook_iniciar_sesion' 
        />
      </a>

      <a 
          href='https//www.instagram.com'
          target='_blank'>
        <img
          className='igIcon' 
          src={igIcon} 
          alt='instagram_iniciar_sesion' 
        />
      </a>

      <a 
          href='https//www.tweeter.com'
          target='_blank'>
        <img
          className='twIcon' 
          src={twIcon} 
          alt='tweeter_iniciar_sesion' 
        />
      </a>
    </div>

    <div className='copyright'>
      <p>©Copyright - Nueva Medicina</p>
    </div>

  </footer>
  )
}

export default Footer;