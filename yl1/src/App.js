import './App.css';
import {Routes, Route} from 'react-router-dom';
import Menyy from './components/Menyy';
import Tegelased from './pages/Tegelased';
import Autod from './pages/Autod';


function App() {
  return (
    <div className="App">
        <Menyy/> <br/>
          <Routes>
            <Route path="/tegelased" exact element={<Tegelased/>} /> 
            <Route path="/autod" exact element={<Autod/>} />
          </Routes>
      
    </div>
  );
}

export default App;
