import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import { ShopContextProvider } from './context/shop-context';


function App() {

  return (
    <div>
    <ShopContextProvider>
        <Router>
            <NavBar />
          
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
          
        </Router>
      </ShopContextProvider>
    </div>

  );
}

export default App;
