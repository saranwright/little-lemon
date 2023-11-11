import './App.css';
import Header from './header';
import Nav from './nav';
import Home from './home';
import Footer from './footer';
import Booking from './booking';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/reservations" element={<Booking />} />
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
