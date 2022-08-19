//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/home";
import Counter from "./components/counter/counter";
import Navbar from "./components/navbar/navbar";
import Shop from "./components/Shop/shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </Router>
  );
}

export default App;
