import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
