import React from "react";
import { useState } from "react";

import message from "../icons/message.png";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {createComment} from '../features/commentsReducer'

const Sport = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.todos.items);

const comments = useSelector((state)=>state.comments.comments);

// console.log("=>commentsssss",comments)
const filteredcomments = comments?.filter((item)=>item.categoryId==='637e6c9266aff17b324cfc23')
// console.log("com",filteredcomments)


  const filterednews = news?.filter(
    (item) => item?.categoryId === '637e6c9266aff17b324cfc23'
  );
 

  const [text, setText] = useState('');

   const handleChange = (e)=>{
    setText(e.target.value)
   }
   const handleSubmit = (e)=>{
  
              dispatch(createComment(text, '637e6c9266aff17b324cfc23'));
             
            }
           
  return (
    <>
      {filterednews?.map((item, id) => {
        return (
          <div key={item._id}>
            <div className="block-one">
              <div className="image-radius">
                <img src={item.image} alt="" />
                <div className="title-news">{item.title}</div>
              </div>
            </div>
          </div>
        );
      })}
     <div>
             <div  className="comments nav-link">
      <img src={message} alt="" />
        <h2>Комментарии:</h2>
      </div>
        
      
          <input
           type="text"
            onChange={handleChange}
            value={text}
            className="textarea"
            
          />
      
        <p>
          <div> 
          <button 
          onClick={()=>handleSubmit()}
          className="button" 
          type="button"
          >
            отправить
          </button>
          
          </div>
         
          
        </p>
     
      {filteredcomments?.map((item, index)=>{
        return(
          <div>{item.text}</div>
        )
      })}
        </div> 
    </>
  );
};

export default Sport;
