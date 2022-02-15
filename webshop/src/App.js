import { Route, Routes} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Cart from './pages/Cart';



function App() {
  return ( 
  <div> 
   <NavigationBar /> 
   <Routes>
      <Route path = '/' exact element = {<Home />} />
      <Route path = '/ostukorv' exact element = {<Cart />} />
    </Routes> 
  </div>
  );
}

export default App;
 