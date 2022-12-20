import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from '../features/newsReducer'
// import { todosReducer } from '../features/todosReducer'
export const store = configureStore({
    reducer:  newsReducer
    
    
});
