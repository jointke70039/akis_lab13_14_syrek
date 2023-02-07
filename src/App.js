
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import {CFooter} from './components/CFooter';
import CHeader from './components/CHeader';
//import Navbar from './components/Navbar';
//import CContents from './components/CContents'
import Movie from './components/Movie';

import CMainPage from './components/Main';
import Historia from './components/Historia';
import Ciekawostki from './components/Ciekawostki';


function App() {
  return (
    <Router>
    <div className="App">
     <CHeader aName="Jan" aFamily="Kowalski"/>
    <Routes>
      <Route exact path="/" element={<CMainPage/>}/>
      <Route exact path="/historia" element={<Historia/>}/>
      <Route exact path="/ciekawostki" element={<Ciekawostki/>}/>
    </Routes>
     <Movie/>
 
      
        <CFooter/>
      

    </div>
    </Router>
  );
}

export default App;
