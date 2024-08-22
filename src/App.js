import './App.css';
import Navbar from './Compoenents/Nav';
import Slider from './Compoenents/Slider';
import ProductList from './Compoenents/ProList';
import { Routes, Route } from "react-router-dom";
import About from './Compoenents/About';
import ProDetails from './Compoenents/Details';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Slider />
            <ProductList />
          </>
        } />
        <Route path='about' element={<About />} />
        <Route path='product/:productId' element={<ProDetails />} />
      </Routes>
      {/* <Product />
      <Product /> */}
    </div>
  );
}

export default App;