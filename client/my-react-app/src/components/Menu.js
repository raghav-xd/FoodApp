
import Menucard from "./Menucard";
import menudata from "../utils/menudata";

const Menu=()=>{
    return(
      <div className="menu-container">
          <h2 className="menu-heading"> Order our best food options</h2>

          <div className="menu-container2">
          
          {
          menudata.map((res)=>{
            return <Menucard prop={res}/>
          })

          }

          </div>
      </div>
    );
}
export default Menu;