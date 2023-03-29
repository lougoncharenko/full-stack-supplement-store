
import React, {useState, useEffect} from 'react';
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
  const [cart, setCart] = useState(null)

  useEffect(()=> {
    console.log("data is fetching")
    async function fetchData() {
    const res = await fetch("http://localhost:3001/data", {mode: "cors"})
    const json = await res.json() 
    setData(json)
    console.log("data is fetching")
  } fetchData()
  }, [])

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/supplement" element={<Supplement setSupplementDetail={setSupplementDetail}/>} />
      <Route path="/cart" element={<Cart data={data}/>} />
      <Route path="/supplement/:id" element={<DetailPage supplementDetail={supplementDetail} setCart={setCart}/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  </>
  );
}

export default App;