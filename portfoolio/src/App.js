import './App.css';
import {Link} from 'react-router-dom';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
        <img src="blue-mountain.jpeg" alt="" /> 
        <hr className="retangle"></hr>
           
            <div className="main-link-list">
              <Link to="/Work">
                <button className= "main-link"><img src="work.jpeg"  alt="" /> </button>
              </Link>
              <Link to="/Hobbies">
                <button className= "main-link"><img src="hobbies.jpeg"  alt="" /></button>
              </Link>
              <Link to="/Courses">
                <button className= "main-link"><img src="courses.jpeg"  alt="" /> </button>
              </Link>
      
            </div> 
    </div>
  );
}

export default App;
