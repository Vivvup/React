import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavigationBar.css';
import { cartSumService } from '../services/cartSumService';
import AuthContext from '../store/authContext';
import Button from 'react-bootstrap/Button';
// import { loggedInService } from '../services/loggedInService';


function NavigationBar () {
    //t-tõlkimiseks
    //i18n-keele vahetamiseks
    const { t, i18n } = useTranslation();
    const[cartSum, setCartSum] = useState(getCartSumFromSS());
    // const[loggedIn, setLoggedIn] = useState(getLoggedInFromSS());
    const ctx = useContext(AuthContext);

    function getCartSumFromSS() {
        if (sessionStorage.getItem("cart")) {
          const cartProducts = JSON.parse(sessionStorage.getItem("cart"));
          let sumOfCart = 0;
          cartProducts.forEach(element => sumOfCart += element.cartProduct.price * element.quantity);
          return sumOfCart.toFixed(2);
        } else {
          return 0;
        }
      }

      // function getLoggedInFromSS(){
      //   return sessionStorage.getItem("loggedIn")
      // }

    cartSumService.getCartSum().subscribe(cartSumFromObs => setCartSum(cartSumFromObs));

    // loggedInService.getIsLoggedIn().subscribe(isLoggedInFromObs=> setLoggedIn(isLoggedInFromObs));

    function changeLang(language) {
        i18n.changeLanguage(language);
        localStorage.setItem("language",language);
    }
    
    // function logout(){
    //   sessionStorage.removeItem("loggedIn");
    //   // setLoggedIn(false);
    //   loggedInService.sendIsLoggedIn(false);
    // }

    return (
    <Navbar className= "space" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand  as={Link} to ='/'><img className = 'logo' alt = 'main logo' src = '/webshou.png' /></Navbar.Brand>
        <Nav className="me-auto">
           { ctx.loggedIn &&  <Nav.Link as={Link} to ='/admin'>{t('admin-button')}</Nav.Link>}
            <Nav.Link as={Link} to ='/ostukorv'>{t('cart-button')}</Nav.Link>
            <div className = "cart-sum">{cartSum} €</div>
        </Nav>
        <Link to="/poed">
        <Button>Meie poed</Button>
        </Link>
        <img className="lang-flag" alt="" src="/language/united-kingdom.png" onClick= {() => changeLang ('en')} />
        <img className="lang-flag" alt="" src="/language/estonia.png" onClick= {() => changeLang('ee')} />
        <img className="lang-flag" alt="" src="/language/russia.png" onClick= {() => changeLang('ru')} />
        { !ctx.loggedIn && 
        <Link to="/logi-sisse">
          <button>Logi sisse</button>
        </Link>}
        { ctx.loggedIn && 
        <button onClick={ctx.onLogout}>Logi välja</button>
        }
        </Container>
    </Navbar>);
}

export default NavigationBar;