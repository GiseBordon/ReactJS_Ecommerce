import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <>
      <div>
        <NavBar /> 
      </div>
      <div className="itemListClass">
      <ItemListContainer greeting={'Bienvenidos a nuestro e-Commerce'}/>     
      </div>
    </>
  );
}
export default App;
