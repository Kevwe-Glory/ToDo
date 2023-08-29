import React, { useState } from 'react';

const TaskList = ({ tasks, completeTask, addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div className="space-y-2">
            <ul className="space-y-2">
                {tasks.map(task => (
                    <li key={task.id} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => completeTask(task.id)}
                            className="mr-2"
                        />
                        <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
                    </li>
                ))}
            </ul>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="p-2 border rounded-lg flex-grow"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-stone-600"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default TaskList;
