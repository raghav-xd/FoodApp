import { CDN_URL } from "../utils/constants";


  const Rescart = ({resdata}) => {
    
    const { name, locality, areaName, avgRating, cloudinaryImageId, sla } =
    resdata.info;

    return (
      <div className="res-cards" >
        <img className="card-img" src={CDN_URL+ resdata.info.cloudinaryImageId}/>
        
        <h3>{name}</h3>
        <h5>{locality}</h5>
        <h5>{areaName }</h5>
        <h5>Deliery time-38 minutes</h5>
        <h5>Rating-{avgRating}</h5>
        
      </div>
    );
  };

  // higher order function
  // input - rescart => rescartopened
  export const WithOpenlabel=(Rescart)=>{
    return (props)=>{
      return (
          <div>
            <label className="promote">Promoted</label>
            <Rescart {...props}/>
          </div>
      );
    };
  };

  export default Rescart;