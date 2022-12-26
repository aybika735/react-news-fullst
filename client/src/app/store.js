import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "../features/newsReducer";
import { todosReducer } from "../features/todosReducer";
import { commentsReducer } from "../features/commentsReducer";
export const store = configureStore({
  reducer:  {
   news: newsReducer,
   todos: todosReducer,
   comments: commentsReducer
  } 
  
});
