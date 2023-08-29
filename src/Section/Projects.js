import React, { useState } from 'react';
import TaskList from '../Component/TaskList';
import ProgressCard from '../Component/ProgressCard';

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: false },
    ]);

    const completeTask = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const addTask = (taskTitle) => {
        const newTask = { id: tasks.length + 1, title: taskTitle, completed: false };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const completedTasks = tasks.filter(task => task.completed);
    const percentage = (completedTasks.length / tasks.length) * 100;

    return (
        <div className="container mx-auto px-4 m-0 py-8">
            <ProgressCard percentage={percentage} />
            <h1 className="text-2xl font-semibold m-4">Task Tracker</h1>
            <TaskList tasks={tasks} completeTask={completeTask} addTask={addTask} />
        </div>
    );
};

export default App;
