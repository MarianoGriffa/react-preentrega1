
import CardWidget  from "../CardWidget/CardWidget"; 
 
 const NavBar = () => {    
  return (
    <nav className="navbar"> 
       <h4 className="navbar-brand">KiwiShore</h4>
       <div className="navbar-menu ">          
          <div className="navbar-start"> 
            <button  className="navbar-item button is-medium is-info">Pantalones</button>
            <button className="navbar-item button is-medium is-info">Buzos</button>
            <button  className="navbar-item button is-medium is-info">Camperas</button>
            <button className="navbar-item button is-medium is-info">Remeras</button>
          </div>         
          <div/>   
       </div>     
     <CardWidget />         
 
    </nav> 
  )

}
export default NavBar; 