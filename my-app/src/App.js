
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Kodu from './pages/Kodu';
import Menüü from './components/Menüü';
import Ostukorv from './pages/Ostukorv';
import Pakiautomaadid from './components/Pakiautomaadid';


//Link to="/" --localhost:3000
//Link to="/ostukorv" --localhost:3000/ostukorv
function App() {
  return (
    <div className="App">
      <Menüü/>
      <Routes>
        <Route path= "/" exact element={ <Kodu />} />
        <Route path= "/ostukorv" exact element={ <Ostukorv />} />
        <Route path= "/pakiautomaadid" exact element={ <Pakiautomaadid />} />
      </Routes>
      
    </div>
  );
}

export default App;
