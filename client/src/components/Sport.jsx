import React from "react";
import { useState } from "react";



import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createComment, fetchComments, deleteComments} from "../features/commentsReducer";
// import { useEffect } from "react";
import Comments from "./Comment";

const Sport = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.todos.items);

  const comments = useSelector((state) => state?.comments?.comments);
  
 
 
  const filteredcomments = comments?.filter(
    (item) => item?.categoryId === "637e6c9266aff17b324cfc23"
  );


  const filterednews = news?.filter(
    (item) => item.categoryId === "637e6c9266aff17b324cfc23"
  );

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
 
  
  const  handleSubmit = () => {
    setText("");
    dispatch(createComment(text, "637e6c9266aff17b324cfc23"));
    dispatch(fetchComments());
    

  }
  function deleteTodo(userId, id) {
    dispatch(deleteComments(userId, id));
    dispatch(fetchComments());
    
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
      <Comments text={text} filteredcomments={filteredcomments} handleChange={handleChange} handleSubmit={handleSubmit} deleteTodo={deleteTodo}/>
    </>
  );
};

export default Sport;