import  NavBar  from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";         
  
 function App() { 
  return ( 
    <div>  
      <NavBar />   
       <ItemListContainer greeting={"Bienvenido a mi App!!"}/>
    </div>        
  
 
  ); 
} 

export default App;
