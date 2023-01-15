import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment, deleteComments } from "../features/commentsReducer";
import Comments from "./Comment";

const Politic = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const news = useSelector((state) => state.todos.items);
  const comments = useSelector((state) => state?.comments?.comments);

  const filteredcomments = comments?.filter(
    (item) => item?.categoryId === "637e6c8b66aff17b324cfc21"
  );

  const filterednews = news?.filter(
    (item) => item.categoryId === "637e6c8b66aff17b324cfc21"
  );

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = () => {

      dispatch(createComment(text, "637e6c8b66aff17b324cfc21"));
      setText("");

  };

  const deleteTodo = (userId, id) =>{
    dispatch(deleteComments(userId, id));
   
  } 

  return (
    <>
      {filterednews?.map((item) => (
        <div key={item._id}>
          <div className="block-one">
            <div className="image-radius">
              <img src={item.image} alt="" />
              <div className="title-news">{item.title}</div>
            </div>
          </div>
        </div>
      ))}
      <Comments
        text={text}
        filteredcomments={filteredcomments}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default Politic;
