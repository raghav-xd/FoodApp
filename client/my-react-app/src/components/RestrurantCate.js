import React from 'react';
import Accordianlist from './Accordianlist';

 function RestrurantCate({data}) {
    console.log(data);
    
  return (
    <div>
     {/* Header */}
       <div className='category-section'>
        <h3>{data.title} ({data.itemCards.length})</h3>
        <span>⬇️</span>
       </div>

       {/* Accordian body */}
       {/* making another compennt */}
       <div>
          <Accordianlist dataa={data.itemCards}/>
       </div>
    </div>
  )
}

export default RestrurantCate;
