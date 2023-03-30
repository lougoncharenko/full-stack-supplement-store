
import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Supplement from './pages/Supplements';
import Cart from './pages/Cart';
import DetailPage from './pages/DetailPage';

function App() {
  const [supplementDetail, setSupplementDetail] = useState({});
  const [data, setData] = useState(null)

  useEffect(()=> {
    console.log("data is fetching")
    async function fetchData() {
    const res = await fetch("http://localhost:3001/data", {
      method : "GET",
      mode: "cors"})
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
      <Route path="/supplement" element={<Supplement setSupplementDetail={setSupplementDetail}/>} />
      <Route path="/cart" element={<Cart data={data}/>} />
      <Route path="/supplement/:id" element={<DetailPage supplementDetail={supplementDetail} />} />
    </Routes>
  </>
  );
}

export default App;