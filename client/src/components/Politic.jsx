import React from "react";
import { useSelector } from "react-redux";
import message from "../icons/message.png";
import { useState } from "react";




import { useDispatch } from "react-redux";
import {createComment} from '../features/commentsReducer'
const Politic = () => {
    const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const [text, setText] = useState('');
  const filtered = todos.filter(
    (item) => item.categoryId === "637e6c8b66aff17b324cfc21"
  );
  const comments = useSelector((state)=>state.comments.comments);

  const filteredcomments = comments?.filter((item)=>item.categoryId==='637e6c8b66aff17b324cfc21')
  const handleChange = (e)=>{
    setText(e.target.value)
   }
   const handleSubmit = (e)=>{
  
              dispatch(createComment(text,'637e6c8b66aff17b324cfc21'));
             
            }
           

  return (
    <>
      {filtered.map((item, index) => {
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

export default Politic;
