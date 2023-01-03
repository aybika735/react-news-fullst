import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Comments from "./Comment";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createComment, fetchComments, deleteComments} from "../features/commentsReducer";
const Politic = () => { "637e6c8b66aff17b324cfc21"
const dispatch = useDispatch();
const news = useSelector((state) => state.todos.items);

const comments = useSelector((state) => state?.comments?.comments);

// console.log("=>commentsssss",comments)
const filteredcomments = comments?.filter(
  (item) => item?.categoryId === "637e6c8b66aff17b324cfc21"
);
// console.log("com",filteredcomments)

const filterednews = news?.filter(
  (item) => item.categoryId === "637e6c8b66aff17b324cfc21"
);

const [text, setText] = useState("");

const handleChange = (e) => {
  setText(e.target.value);
};


const  handleSubmit = () => {
  setText("");
  dispatch(createComment(text, "637e6c8b66aff17b324cfc21"));
  // dispatch(fetchCommentsbyCategory("637e6c8b66aff17b324cfc21"));
  dispatch(fetchComments());
}
function deleteTodo(userId, id) {
  dispatch(deleteComments(userId, id));
  dispatch(fetchComments());
  // dispatch(fetchCommentsbyCategory("637e6c8b66aff17b324cfc21"));
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
    <Comments text={text} filteredcomments={filteredcomments} handleChange={handleChange} handleSubmit={handleSubmit}  deleteTodo={deleteTodo}/>
  </>
);
};

export default Politic;
