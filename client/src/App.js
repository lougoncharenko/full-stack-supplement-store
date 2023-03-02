
import React, {useState} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Supplement from './pages/Supplements';
import Cart from './pages/Cart';
import DetailPage from './pages/DetailPage';
import Checkout from './pages/Checkout';

function App() {
  const [supplementDetail, setSupplementDetail] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(null)
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/supplement" element={<Supplement setSupplementDetail={setSupplementDetail}/>} />
      <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
      <Route path="/supplement/:id" element={<DetailPage supplementDetail={supplementDetail} onAdd={onAdd}/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  </>
  );
}

export default App;