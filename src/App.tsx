import React, {useState} from 'react';
import Header from './components/Header/Header';
import InputField from './components/InputField/InputField';
import TaskList from './components/TaskList/TaskList';
import {Task} from './model';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {added} from './features/task/task-slice';

const App: React.FC = () => {
  const [taskNew, setTaskNew] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const task = useAppSelector((state) => state.manager.tasks);
  const dispatch = useAppDispatch();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(added(taskNew));
    console.log(task);
    if (taskNew) {
      setTaskNew('');
    }
  };

  return (
    <>
      <Header />

      <InputField
        taskNew={taskNew}
        handleAdd={handleAdd}
        setTaskNew={setTaskNew}
      />

      <TaskList tasks={task} setTasks={setTasks} />
    </>
  );
};

export default App;
