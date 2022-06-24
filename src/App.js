
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AllProducts from './components/AllProducts';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
    <div className="App">
    < Header />
      <Routes>
        <Route path='/' element={< AllProducts />} />
        <Route path='/products/:productId' element={< ProductDetails />} />
        <Route path='*' element={< PageNotFound />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
