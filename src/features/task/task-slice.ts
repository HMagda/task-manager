import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskEditDto} from '../../model';

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
        text: action.payload,
        isDone: false,
      });
    },

    modified: (state, action: PayloadAction<TaskEditDto>) => {
      state.tasks
        .filter((taskEdit) => taskEdit.id === action.payload.id)
        .forEach((task) => {
          task.text = action.payload.text;
        });
    },

    deleted: (state, action: PayloadAction<number>) => {
      let deletedTaskIndex = -1;

      state.tasks.forEach((task) => {
        deletedTaskIndex += 1;

        if (task.id === action.payload) {
          state.tasks.splice(deletedTaskIndex, 1);
        }
      });
    },

    // done
  },
});

export const {added, modified, deleted} = taskSlice.actions;
export default taskSlice.reducer;
