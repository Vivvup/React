import { Route, Routes} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AdminHome from './pages/admin/AdminHome';
import PaymentCompleted from './pages/PaymentCompleted';
import AddProduct from './pages/admin/AddProduct';
import ViewProducts from './pages/admin/ViewProducts';
import EditProduct from './pages/admin/EditProduct';
import SingleProduct from './pages/SingleProduct';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { loggedInService } from './services/loggedInService';
import { useState } from 'react';

function App() {
  const[loggedIn, setLoggedIn] = useState(getLoggedInFromSS());
  
  function getLoggedInFromSS() {
    return sessionStorage.getItem("loggedIn")
  }

  loggedInService.getIsLoggedIn().subscribe(isLoggedInFromObs=> setLoggedIn(isLoggedInFromObs));

  return ( 
  <div> 
   <NavigationBar /> 
   <Routes>
      <Route path = '/' exact element = {<Home />} />
      <Route path = '/ostukorv' exact element = {<Cart />} />
      { loggedIn && <Route>
           <Route path = '/admin' exact element = {<AdminHome />} />
            <Route path= '/admin/lisa' exact element={ <AddProduct />} />
            <Route path= '/admin/tooted' exact element={ <ViewProducts />} />
            <Route path= '/admin/muuda/:productId' exact element={ <EditProduct />} />
            <Route path = '/admin/registreeri' exact element = {<Signup />} />
       </Route>}
       <Route path = '/admin/*' element = {<Login />} />
      <Route path = '/tellimus' exact element = {<PaymentCompleted />} />
       <Route path= '/toode/:productId' exact element={ <SingleProduct />} />
       <Route path = '/logi-sisse' exact element = {<Login />} />
       <Route path= '*' exact element={ <NotFound />} />
    </Routes> 
  </div>
  );
}

export default App;
 