import {configureStore} from '@reduxjs/toolkit';
import taskReducer from '../features/task/task-slice';

export const store = configureStore({
    reducer: {
        manager: taskReducer
    } 
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
