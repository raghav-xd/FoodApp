import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import { useOnlinestatus } from "../utils/useOnlinestatus";

const Header = () => {

  const [btnName,setbtnName]=useState("Login");
  const [online,setonline]=useState(true);
  const onlinestatus=useOnlinestatus();
  
    return (
      <div className="navbar">
        <div>
          <img className="logo" src={LOGO_URL}/>
        </div>
       

        <div className="nav-items">
          <ul>
          <li>
            Online: {onlinestatus?'\u2705':'\u274C'}
          </li>
          <li><Link to="/">Home</Link> </li> 
          <li><Link to="/grocery">Grocery</Link></li>
           <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <button className="login-Btn" onClick={()=>{
              btnName==="Login"?setbtnName("Logout"): setbtnName("Login");
            }}>
              {btnName}
            </button>
    
          </ul>
        </div>
      </div>
    );
  };

  export default Header;