import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import postSlice from "../features/post/postSlice";
import todoSlice from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        usersss: userSlice,
        postsss: postSlice,
        todosss: todoSlice,
    },
})