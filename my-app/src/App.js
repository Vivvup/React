
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Kodu from './pages/Kodu';
import Menüü from './components/Menüü';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">
      <Menüü/>
      <Routes>
        <Route path= "/" exact element={ <Kodu />} />
        <Route path= "/ostukorv" exact element={ <Ostukorv />} />
      </Routes>
      
    </div>
  );
}

export default App;
