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

    deleted: (state, action: PayloadAction<number>) => {
      let deletedTaskIndex = -1;

      state.tasks.forEach((task) => {
        deletedTaskIndex += 1;

        if (task.id === action.payload) {
          const deletedTask = task.id;
          console.log('obecne id', deletedTask);
          state.tasks.splice(deletedTaskIndex, 1);
        }
      });
    },
    // done
  },
});

export const {added, deleted} = taskSlice.actions;
export default taskSlice.reducer;
