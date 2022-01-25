import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Menyy from './components/Menyy';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';


function App() {
  return (
    <div className="App">
      <Header/>
         <hr className="retangle"></hr>
      <Menyy/>
      <br/>
        <Routes>
            <Route path="/Work" exact element={<Work/>} />
            <Route path="/Hobbies" exact element={<Hobbies />} />
            <Route path="/Courses" exact element={<Courses />} /> 

        </Routes>
        
           
            
    </div>
  );
}

export default App;
