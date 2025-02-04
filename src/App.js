

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductItem from './components/ProductItem';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';




function App() {
  return (
    <div className="App">

      <Provider store={store}>



        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/product' element={<Product />}> </Route>
            <Route path='/cart' element={<Cart />}> </Route>
            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='/productsitem/:id' element={<ProductItem />}> </Route>

          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
