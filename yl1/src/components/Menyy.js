import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Menyy () {
    const { t, i18n } = useTranslation();
    return(
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand  as={Link} to ='/tegelased'><img className = 'logo' alt = 'main logo' src = '/TGL.png' /></Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to ='/tegelased'>{t('character-button')}</Nav.Link>
            <Nav.Link as={Link} to ='/autod'>{t('cars-button')}</Nav.Link>
            <Nav.Link as={Link} to ='/keel'>{t('language-button')}</Nav.Link>
            <Nav.Link as={Link} to ='/andmebaas'>{t('database-button')}</Nav.Link>
            <Nav.Link as={Link} to ='/jsonplaceholder'>{t('jsonplaceholder-button')}</Nav.Link>
        </Nav>
        <button onClick= {() => i18n.changeLanguage('en')}>EN</button>
        <button onClick= {() => i18n.changeLanguage('ee')}>EE</button>
        </Container>
    </Navbar>
    );
}
export default Menyy;