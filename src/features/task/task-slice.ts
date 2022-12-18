import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../model';

type TaskState = {
  tasks: Task[];
};

type TaskAction = {
  type: string;
  task: Task;
};

type DispatchType = (args: TaskAction) => TaskAction;

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: Date.now(),
        task: action.payload,
        isDone: false,
      });
    },
    // deleted
    // done
  },
});

export const {added} = taskSlice.actions;
export default taskSlice.reducer;
