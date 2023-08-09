import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BrowseNGO from './pages/BrowseNGO/BrowseNGO';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Home from './pages/Home/Home';
import NgoLogin from './pages/NGOLogin/NgoLogin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browsengo" element={<BrowseNGO />} />
          <Route path="/ngologin" element={<NgoLogin />} />
          <Route path="/itemdetails" element={<ItemDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>

     </>
  );
}

export default App;
