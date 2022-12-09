import React, {useState} from 'react';
import Header from './components/Header/Header';
import InputField from './components/InputField/InputField';
import TaskList from './components/TaskList/TaskList';
import {Task} from './model';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, {id: Date.now(), task, isDone: false}]);
      setTask('');
    }
  };

  return (
    <>
      <Header />
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
