import React from "react";
import { useSelector } from "react-redux";
import Comments from "./Comment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment, fetchComments , deleteComments} from "../features/commentsReducer";
// import { useEffect } from "react";
const Put = () => {
const dispatch = useDispatch();
const news = useSelector((state) => state.todos.items);

const comments = useSelector((state) => state?.comments?.comments);

// console.log("=>commentsssss",comments)
const filteredcomments = comments?.filter(
  (item) => item?.categoryId === "63a0aeaa78b01e14b8f498c7"
);

// console.log("com",filteredcomments)

const filterednews = news?.filter(
  (item) => item.categoryId === "63a0aeaa78b01e14b8f498c7"
);

const [text, setText] = useState("");

const handleChange = (e) => {
  setText(e.target.value);
};


const  handleSubmit = () => {
  setText("");
  dispatch(createComment(text, "63a0aeaa78b01e14b8f498c7"));
  // dispatch(fetchCommentsbyCategory("63a0aeaa78b01e14b8f498c7"));
  dispatch(fetchComments());
}
function deleteTodo(userId, id) {
  dispatch(deleteComments(userId, id));
  dispatch(fetchComments());
  // dispatch(fetchCommentsbyCategory("63a0aeaa78b01e14b8f498c7"));
}

// useEffect(() => {
//   setText("");
// }, [comments])

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

export default Put;
