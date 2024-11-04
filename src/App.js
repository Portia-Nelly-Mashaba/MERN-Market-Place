import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
          {/* <Route path='/update/:id' element={<Update />}></Route> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
