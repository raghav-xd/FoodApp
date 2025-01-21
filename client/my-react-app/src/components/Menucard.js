
import menudata from "../utils/menudata";

const Menucard=({prop})=>{
  return (
    <div className="menu-card">
    <h3 className="menu-card-name">{prop.name}</h3>
    <img  className="menu-img" src={prop.img}/>
    </div>
    
  )
}

export default Menucard;