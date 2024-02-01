import React from 'react';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';


const Star = () => {
    const [rating,setrating]=useState(0);
    const[hover,setHover]=useState(0);
    const HandleClick=(getcurrentindex)=>{
       setrating(getcurrentindex);
    }
    const mouseHover=(getcurrentindex)=>{
        setHover(getcurrentindex);
    }
    const mouseleave=()=>{
        setHover(rating);
    }

  return (

        
    <div className='wrapper'>
        {
            [...Array(5)].map((_,index)=>{
                index+=1;
                return(
                    <div className='box' key="index">
                    <FaStar
                      className={index<=(hover || rating) ? 'active' :'inactive'} 
                     onClick={()=>{HandleClick(index)}}
                       onMouseMove={()=>{mouseHover(index)}}
                       onMouseLeave={()=>{mouseleave()}} size={50}/>
                    </div>

                )
            })
        }
      
    </div>
  )
}

export default Star

