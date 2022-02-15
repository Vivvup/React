import './App.css';
import {Routes, Route} from 'react-router-dom';
import Menyy from './components/Menyy';
import Tegelased from './pages/Tegelased';
import Autod from './pages/Autod';
import LisaTegelane from './pages/LisaTegelane';
import YksikTegelane from './pages/YksikTegelane';
import VaataTegelasi from './pages/VaataTegelasi';
import MuudaKeel from './pages/MuudaKeel';
import Andmebaas from './pages/Andmebaas';
import JsonPlaceholder from './pages/JsonPlaceholder';


function App() {
  return (
    <div className="App">
        <Menyy/> <br/>
          <Routes>
            <Route path="/tegelased" exact element={<Tegelased/>} /> 
            <Route path="/tegelased/lisa" exact element={<LisaTegelane/>} /> 
            <Route path="/tegelased/tegelased" exact element={<VaataTegelasi/>} /> 
            <Route path="/tegelane/:tegelaseNimi" exact element={<YksikTegelane/>} /> 
            <Route path="/autod" exact element={<Autod/>} />
            <Route path="/keel" exact element= {<MuudaKeel />} />
            <Route path="/andmebaas" exact element= {<Andmebaas />} />
            <Route path="/jsonplaceholder" exact element= {<JsonPlaceholder />} />
          </Routes>
      
    </div>
  );
}

export default App;
