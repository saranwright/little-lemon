import './App.css';
import Header from './header';
import Nav from './nav';
import Home from './home';
import Footer from './footer';
import Booking from './booking';
import Confirmation from './confirmation';
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
