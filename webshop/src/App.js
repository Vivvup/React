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



function App() {
  return ( 
  <div> 
   <NavigationBar /> 
   <Routes>
      <Route path = '/' exact element = {<Home />} />
      <Route path = '/ostukorv' exact element = {<Cart />} />
      <Route path = '/admin' exact element = {<AdminHome />} />
      <Route path = '/tellimus' exact element = {<PaymentCompleted />} />
      <Route path= "/admin/lisa" exact element={ <AddProduct />} />
      <Route path= "/admin/tooted" exact element={ <ViewProducts />} />
      <Route path= "/admin/muuda/:tooteNimi" exact element={ <EditProduct />} />
       <Route path= "/toode/:tooteNimi" exact element={ <SingleProduct />} />
    </Routes> 
  </div>
  );
}

export default App;
 