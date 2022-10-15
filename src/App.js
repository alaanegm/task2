import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Users from './components/Users';
import Home from './components/Home';


function App() {
  
  return (
<div className="App">
       <Navbar/>
  <div className="row">
    <div className="col-12">
     <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="users" element={<Users/>} />
      </Routes>
     </div>
     </div>
 </div>
  );
}

export default App;
