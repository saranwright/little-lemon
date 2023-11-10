import './App.css';
import Header from './header';
import Nav from './nav';
import Main from './main';
import Home from './home';
import Footer from './footer';
import Booking from './booking';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="*" element={<Home />}></Route>
      <Route path="/reservations" element={<Booking />}></Route>
      </Routes>
    </div>
  );
}

export default App;
