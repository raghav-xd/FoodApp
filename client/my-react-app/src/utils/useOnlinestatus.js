import { useState ,useEffect} from "react";
export const useOnlinestatus=()=>{
    const [onlinestatus,setonlinestatus]=useState(true);
    
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false);
        })
    
        window.addEventListener("online",()=>{
            setonlinestatus(true);
        })
    },[])
    
    return onlinestatus;
   
}