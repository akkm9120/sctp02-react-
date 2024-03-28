import React, { useState } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: "Water the plant",
            done: false
        },
        {
            id: 2,
            description: "Walk the dog",
            done: false
        },
        {
            id: 3,
            description: "Pay bill",
            done: false
        }
    ]);

    const [newTask, setNewTask] = useState("");
    const [modifiedDescription, setModifiedDescription] = useState("");
    const [taskBeingEdited, setTaskBeingEdited] = useState(0);

    function addTask() {
        let newEntry = {
            id: tasks.length + 1,
            description: newTask,
            done: false
        };
        setTasks([...tasks, newEntry]);
    }

    function checkTask(taskId) {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, done: !task.done } : task
        ));
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    function updateTask(taskId, description) {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, description: description } : task
        ));
        setTaskBeingEdited(0);
    }

    return (
        <>
            <h1>To Do List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.description}
                        <input type="checkbox" 
                               checked={task.done}
                               onChange={() => checkTask(task.id)} />
                        <button onClick={() => setTaskBeingEdited(task.id)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h2>Create new task</h2>
            <div>
                <label> Task Description</label>
                <input type="text"
                    name="newTaskName"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <button onClick={addTask}> Add </button>
            </div>

            {taskBeingEdited !== 0 && (
                <div>
                    <input type="text" value={modifiedDescription} onChange={(e) => setModifiedDescription(e.target.value)} />
                    <button onClick={() => updateTask(taskBeingEdited, modifiedDescription)}>Save</button>
                </div>
            )}
        </>
    );
}
