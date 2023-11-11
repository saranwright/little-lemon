import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import Booking from './components/booking';
import Confirmation from './components/confirmation';
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
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
