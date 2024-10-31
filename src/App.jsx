import React from "react";
 import { Routes, Route } from "react-router-dom/dist";
import Home from "./pages/Home";
import Footer from "./pages/includes/Footer";
import Header from "./pages/includes/Header";
import Calculation from "./pages/Calculation";
const App = ()=>{
 return(<>
 <div id ="top-container" className="container-fluid">

<div className="row">
<Header/>
</div>


</div>
<div id ="center-container" className="container-fluid">

<div className="row">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/calculation" element={<Calculation/>}/>

  </Routes>
</div>


</div>

<div id ="botom-container" className="container-fluid">

<div className="row">
<Footer/>
</div>
</div>

</>

 )

};

export default App;