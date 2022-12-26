import React from "react";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from 'react-redux';
// import { fetchTodos } from "../features/todosReducer";
// import {fetchComments} from '../features/commentsReducer'


const Home = (props) => {
// const dispatch = useDispatch();
const loading = useSelector(state=> state.todos.loading);
const error= useSelector(state=> state.todos.error);
const items = useSelector(state=> state.todos.items);


    
// useEffect(()=>{
//   dispatch(fetchTodos())
//   dispatch(fetchComments())
// },[dispatch])

 if (loading){
  return(
    <div>
      loading...
    </div>
  )
 }
if(error){
  return(
    <div>
      {error}
    </div>
  )
}
 
  return (
    <>
  
      {items.map((item, index) => {
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
     
    </>
  );
};

export default Home;
