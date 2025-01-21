import Rescard from "./Rescart";
// import reslist from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlinestatus } from "../utils/useOnlinestatus";
import Rescart, { WithOpenlabel } from "./Rescart";
    
//body
const Body=()=>{
    const [listres,setlistres]=useState([]);
    const [searchText,setsearchText]=useState("");
    const EnhancedComponent = WithOpenlabel(Rescart);

    useEffect(()=>{
      fetchdata();
    },[]);
    // // function to fetch data from swiggy api
    
    const fetchdata=async()=>{
       
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      const json=await data.json();
      console.log(json);
      // console.log(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistres(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(listres);
    };
    
    const onlinestatus=useOnlinestatus();

   if(onlinestatus===false) return <h1 className="online">OOPS..! check internet</h1>

    if(listres.length===0) {
      return <Shimmer/>
    }
    // console.log(reslist);


    return (
      <div className="body">
  {/* Button */}
      <div className="body-con1">
        <button className="fiter-btn" onClick={()=>{
          //filter logic
          let filteredlistres=listres.filter((res)=>{
            return res.info.avgRating>4.1;
          })
          setlistres(filteredlistres);
        }}>Top Rated Restrurants</button>

    

  {/* search  */}
        
           <input type="text" className="Search-box" value={searchText} onChange={(e)=>{
             setsearchText(e.target.value);
           }}></input> 

           <button className="search-btn" onClick={()=>{
            // filter logic
            let filterlist=listres.filter((ress)=>{
               return ress.info?.name?.includes(searchText);

            });
            setlistres(filterlist);
           }}> search</button>
          
        </div> 


        <h1 className="restru-heading">Top restaurant chains in Bathinda!!</h1>
        <div className="restrucon">


           {
           listres.map((res)=>{
            {/* console.log(res); */}
            
            return <Link key={res.info.id} to={"/restrurant/"+ res.info.id}>
            {
              res.info.avgRating>4.2 ? (
              <EnhancedComponent resdata={res}/>
              
             ): (
            <Rescard resdata={res}/> 
            )
            }
            </Link>
            
           })

          }  

    

          {/* {
            listres.map((res)=>{
              return <Link key={res.info.id} to={"/restrurant/"+res.info.id}>
                <Rescard resdata={res} /> </Link>
              
            })
          } */}
          
            {/* <Rescard  resdata={reslist[0]}/>
            <Rescard resdata={reslist[1]}/>
            <Rescard resdata={reslist[2]}/>
            <Rescard resdata={reslist[3]}/>
            <Rescard resdata={reslist[4]}/>
            <Rescard resdata={reslist[5]}/>
   */}
  
        </div>
      </div>
    )
}


  
export default Body;