import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment, deleteComments } from "../features";
import Comments from "./Comment";

const Put = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const news = useSelector((state) => state.todos.items);
  const comments = useSelector((state) => state?.comments?.comments);

  const filteredcomments = comments?.filter(
    (item) => item?.categoryId === "63a0aeaa78b01e14b8f498c7"
  );

  const filterednews = news?.filter(
    (item) => item.categoryId === "63a0aeaa78b01e14b8f498c7"
  );

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = () => {
    if (text.length >= 3) {
      dispatch(createComment(text, "63a0aeaa78b01e14b8f498c7"));
      setText("");
    }
  };

  const deleteTodo = (userId, id) => dispatch(deleteComments(userId, id));

  return (
    <>
      {filterednews?.map(item => (
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

export default Put;
