import {  createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  comments:[],

  
  
};


const commentsReducer =createReducer(initialState, (builder) => {
    builder
    .addCase("commentsReducer/comments/pending", (state, action) => {
      return {
        loading: true,
      };
    })
    .addCase("commentsReducer/comments/fulfilled", (state, action) => {
   
      return{
        loading: false,
        comments:[action.payload]
      }
    })
    .addCase("commentsReducer/comments/rejected", (state, action) => {
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
        comments:action.payload
      };
    })
    .addCase("commentsReducer/fetch-todos/rejected", (state, action) => {
      return {
        loading: false,
        comments: [],
       
      };
    })
    
      });
     
      export const createComment = (text, categoryId) =>{
        return async dispatch =>{
          dispatch({type: 'commentsReducer/comments/pending'});
          const response = await fetch('/comments', {
            method: 'POST',
            body: JSON.stringify({text, categoryId}),
            headers:{
              "Content-type":"application/json"
            }
          });
         
          const json = await response.json();
       
          if(json.error){
            dispatch({type:'commentsReducer/comments/rejected', error: json.error});
        
          }else{
            dispatch({type:'commentsReducer/comments/fulfilled', payload: json});
          }
        }
        }
        export const fetchComments = () => {
          return async (dispatch) => {
            dispatch({ type: "commentsReducer/fetch-todos/pending" });
            try {
              const response = await fetch('/comments', {
        
              });
              const json = await response.json();
            
              if (json.error) {
                dispatch({
                  type: "commentsReducer/fetch-todos/rejected",
                  error: "При запросе на сервер произошла ошибка",
                });
              } else {
                dispatch({ type: "commentsReducer/fetch-todos/fulfilled", payload: json });
              }
            } catch (e) {
              dispatch({ type: "commentsReducer/fetch-todos/rejected", error: e.toString() });
            }
          };
        };
        console.log(initialState)
export {commentsReducer};