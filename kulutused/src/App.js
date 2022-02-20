import './App.css';
import {Routes, Route} from 'react-router-dom';
import Overview from './pages/Overview';
import AddExpense from './pages/AddExpense';
import History from './pages/History';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
     <Navbar />
     <Routes>
        <Route path='/' exact element= {<Overview />} />
        <Route path='/lisa_kulutus' exact element= {<AddExpense />} />
        <Route path='/ajalugu' exact element= {<History />} />
     </Routes>
    </div>
  );
}

export default App;
