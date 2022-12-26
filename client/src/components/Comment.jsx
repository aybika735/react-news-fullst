// import React from 'react';
// import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import {createComment} from '../features/commentsReducer'
// import message from "../icons/message.png";
// import { Link } from "react-router-dom";
// const Comments = () => {
//     const [text, setText] = useState('');
//     // const dispatch = useDispatch();
//      const handleChange = (e)=>{
//       setText(e.target.value)
//      }
//   //     const handleSubmit = ()=>{
//   //  props.setOpened(true)
//   //         dispatch(createComment(text, categoryId));
         
//   //       }
        
//     return (

//         <div>
//              <div  className="comments nav-link">
//       <img src={message} alt="" />
//         <h2>Комментарии:</h2>
//       </div>
//             <form>
//         <label>
//           <textarea
//            type="text"
//             onChange={handleChange}
//             value={text}
//             className="textarea"
//             rows="10"
//             cols="140"
//             wrap="hard"
//           ></textarea>
//         </label>
//         <p>
//           <Link to="/comments"> 
//           <input
//           // onClick={handleSubmit}
//           className="button" 
//           type="submit" 
//           value="Отправить" />
//           </Link>
         
          
//         </p>
//       </form> 
//       {/* {props.comments.map((item, index)=>{
//         return(
//           <div>{item.text}</div>
//         )
//       })} */}
//         </div>
//     );
// };

// export default Comments;