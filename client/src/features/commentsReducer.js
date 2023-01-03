import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  comments: [],
 
 

};

const commentsReducer = createReducer(initialState, (builder) => {
  builder
  .addCase("commentsReducer/fetch-todos-category/pending", (state, action) => {
    return {
      loading: true,
    };
  })
  .addCase("commentsReducer/fetch-todos-category/fulfilled", (state, action) => {
    return {
      loading: false,

      comments: action.payload
    };
  })
  .addCase("commentsReducer/fetch-todos-category/rejected", (state, action) => {
    return {
      loading: false,
      comments: [],
    };
  })
     .addCase("commentsReducer/fetch-todos/pending", (state, action) => {
      return {
        loading: true,
      };
    })
    .addCase("commentsReducer/fetch-todos/fulfilled", (state, action) => {
      return {
        loading: false,
        comments: action.payload,
       
      };
    })
    .addCase("commentsReducer/fetch-todos/rejected", (state, action) => {
      return {
        loading: false,
        comments: [],
      };
    })
    .addCase("commentsReducer/comments/pending", (state, action) => {
      return {
        loading: true,
      };
    })
    .addCase(`commentsReducer/comments/fulfilled`, (state, action) => {
     
      return {
        loading: false,
        comments:  [...state.comments, action.payload]
      };
    })
    .addCase("commentsReducer/comments/rejected", (state, action) => {
      return {
        loading: false,
        comments: [],
      };
    })
   
    .addCase("commentsReducer/delete-todo/pending", (state, action) => {
      return {
        loading: true,
      };
    })
    .addCase("commentsReducer/delete-todo/fulfilled", (state, action) => {
     

      return {
        
        loading: false,
        // comments:action.payload
        comments: state.comments.filter((item)=>{
          if(item._id===action.payload) return false;
          return true;
        })
        
        
       
      
      };
    })
    .addCase("commentsReducer/delete-todo/rejected", (state, action) => {
      return {
        loading: false,
        comments: [],
      };
    });
});

export const createComment = (text, categoryId) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "commentsReducer/comments/pending" });
    try{
      const response = await fetch("/comments", {
      method: "POST",
      body: JSON.stringify({ text, categoryId }),
      
      headers: {
        Authorization: `Bearer ${state.news.token}`,
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({
        type: "commentsReducer/comments/rejected",
        error: json.error,
      });
    } 
    else {
      // dispatch({ type: "commentsReducer/comments/fulfilled", payload: json });
    }
    }catch (e) {
      dispatch({
        type: "commentsReducer/comments/rejected",
        error: e.toString(),
      });
    }
  };
};
// export const fetchCommentsbyCategory = (categoryId) => {
//   return async (dispatch) => {
//     dispatch({ type: "commentsReducer/fetch-todos-category/pending" });
//     try {
//       const response = await fetch(`/comments/${categoryId}`, {});
//       const json = await response.json();

//       if (json.error) {
//         dispatch({
//           type: "commentsReducer/fetch-todos-category/rejected",
//           error: "При запросе на сервер произошла ошибка",
//         });
//       } else {
//         dispatch({
//           type: "commentsReducer/fetch-todos-category/fulfilled",
//           payload: json,
//         });
//       }
//     } catch (e) {
//       dispatch({
//         type: "commentsReducer/fetch-todos-category/rejected",
//         error: e.toString(),
//       });
//     }
//   };
// };
export const fetchComments = () => {
  return async (dispatch) => {
    dispatch({ type: "commentsReducer/fetch-todos/pending" });
    try {
      const response = await fetch("/comments", {});
      const json = await response.json();

      if (json.error) {
        dispatch({
          type: "commentsReducer/fetch-todos/rejected",
          error: "При запросе на сервер произошла ошибка",
        });
      } else {
        dispatch({
          type: "commentsReducer/fetch-todos/fulfilled",
          payload: json,
        });
      }
    } catch (e) {
      dispatch({
        type: "commentsReducer/fetch-todos/rejected",
        error: e.toString(),
      });
    }
  };
};
export const deleteComments = (userId, id) => {
 
  return async (dispatch, getState) => { 
    const state = getState();
    dispatch({ type: "commentsReducer/delete-todo/pending" });
    try {
      const response = await fetch(`/comments/${id}`, {
        
          method: "DELETE",
          // body: JSON.stringify({ userId, id }),
          headers: {
            Authorization: `Bearer ${state.news.token}`,
          },
      });
      const json = await response.json();
   
      if (json.error) {
        dispatch({
          type: "commentsReducer/delete-todo/rejected",
          error: json.error,
        });
      } else {
        dispatch({ type: "commentsReducer/delete-todo/fulfilled", payload: json });
      }
    }catch (e) {
      dispatch({
        type: "commentsReducer/delete-todo/rejected",
        error: e.toString(),
      });
    }

  }
};
export { commentsReducer };
