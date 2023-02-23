// import Login from '@mui/icons-material/Login';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "./App.css";
import About from './Component/About';
import Addproduct from './Component/Addproduct';
import AlertErrors from './Component/AlertErrors';
import Card from './Component/Card';
import Contact from './Component/Contact';
// import CardList from './Component/CardList';
// import Carte from './Component/Carte';
import Home from './Component/Home';
import { Login } from './Component/Login';
import NavBar from './Component/NavBar';
import { Register } from './Component/Register';
import ClientRoute from './PrivateRoutes/ClientRoute';



function App() {
  return (
    
    <div>
<NavBar/>
<AlertErrors/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Home" element={<About/>}/>
<Route path='/Products' element={ 
<ClientRoute>
<Card/>
</ClientRoute>
 }/>
<Route path='/Addproduct' element={
  <ClientRoute>
<Addproduct/>
</ClientRoute>
 }/>
<Route path='/Login' element={<Login /> }/>
<Route path='/register' element={<Register/> }/> 
<Route path='/contact' element={<Contact/>}/>

</Routes>
   
</div>
   
  )
}

export default App;


