import React from 'react';
import { useSelector } from "react-redux";


const Put = () => {
    const news = useSelector((state) => state.todos.items);
    
    const filtered = news.filter((item)=>item.categoryId=== '63a0aeaa78b01e14b8f498c7')
    

  
 

    return (
        <>
       
        {filtered.map((item, index) => { 
            return(
               <div key={item._id}>
             <div className='block-one'>
                 <div className='image-radius'>
            <img src={item.image} alt="" />
            <div className='title-news'>{item.title}</div>
            </div>
            </div>
        </div> 
            )

        })}
       
        </>
          
      
    );
};

export default Put;