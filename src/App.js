import './App.css';
import ListProduct from './components/ListProducts/ListProduct';
import Order from './components/Orders/Order';
import Cart from './components/carts/Cart';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={[<Header/>, <Home/>, <Footer/>]}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/ListProducts' element={[<Header/>, <ListProduct/>, <Footer/>]}/>
          <Route path='/Orders' element={[<Header/>, <Order/>, <Footer/>]}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Cart' element={[<Header/>, <Cart/>, <Footer/>]}/>

          
        
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
