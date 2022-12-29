import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  loading: true,
  items: [],
  error: null,
};
const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("todosReducer/fetch-todos/pending", (state, action) => {
      return {
        loading: true,
      };
    })
    .addCase("todosReducer/fetch-todos/fulfilled", (state, action) => {
      return {
        loading: false,
        items: action.payload,
      };
    })
    .addCase("todosReducer/fetch-todos/rejected", (state, action) => {
      return {
        loading: false,
        items: [],
        error: action.error,
      };
    });
});

export const fetchTodos = () => {
  return async (dispatch) => {
    
    dispatch({ type: "todosReducer/fetch-todos/pending" });
    try {
      const response = await fetch("/news", {
       
      });
      const json = await response.json();
      if (json.error) {
        dispatch({
          type: "todosReducer/fetch-todos/rejected",
          error: "При запросе на сервер произошла ошибка",
        });
      } else {
        dispatch({ type: "todosReducer/fetch-todos/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({
        type: "todosReducer/fetch-todos/rejected",
        error: e.toString(),
      });
    }
  };
};
export { todosReducer };
