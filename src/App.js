
import './App.css';
import Home from './Components/Screens/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Screens/Login';
import Navbar from './Components/Navbar';
import Myorder from './Components/Screens/Myorder';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Signup from "./Components/Screens/Signup"
import { CartProvider } from './Components/ContextReducer';

function App() {
  return (
  <CartProvider>

    <BrowserRouter>
         
        <Routes>
          <Route exact path='/'  element = {<Home/>}/>

          <Route exact path='/Login'  element = {<Login/>}/>

          
          <Route exact path='/createUser'  element = {<Signup/>}/>

          <Route exact path='/Myorder'  element = {<Myorder/>}/>

        </Routes>
    

    </BrowserRouter>
   
   </CartProvider> 
  );
}

export default App;
