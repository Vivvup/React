import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function NavigationBar () {
    //t-tõlkimiseks
    //i18n-keele vahetamiseks
    const { t, i18n } = useTranslation();
  

    return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand  as={Link} to ='/'><img className = 'logo' alt = 'main logo' src = '/webshou.png' /></Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to ='/admin'>{t('admin-button')}</Nav.Link>
            <Nav.Link as={Link} to ='/ostukorv'>{t('cart-button')}</Nav.Link>
        </Nav>
        <button onClick= {() => i18n.changeLanguage('en')}>EN</button>
        <button onClick= {() => i18n.changeLanguage('ee')}>EE</button>
        </Container>
    </Navbar>);
}

export default NavigationBar;