import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskEditDto, TaskDoneDto} from '../../model';

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
          task.isDone = false;
        });
    },

    done: (state, action: PayloadAction<TaskDoneDto>) => {
      console.log('done triggered!');
      state.tasks
        .filter((taskDone) => taskDone.id === action.payload.id)
        .forEach((task) => {
          task.isDone = action.payload.isDone;
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
  },
});

export const {added, modified, done, deleted} = taskSlice.actions;
export default taskSlice.reducer;
