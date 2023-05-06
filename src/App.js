import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  let saludo="Bienvenidos"
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={saludo} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path="/detail/:productoId" element={<ItemDetailContainer />}/>
          <Route path="/carrito" element={<CartContainer />}/>
          <Route path="*" element={<Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}
export default App;
