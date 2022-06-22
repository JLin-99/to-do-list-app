import { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";


export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        getLocalTasks();
    }, []);

    const getLocalTasks = () => {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks", JSON.stringify([]));
        } else {
            let tasksLocal = JSON.parse(localStorage.getItem("tasks"));
            setTasks(tasksLocal);
        }
    }

    const saveLocalTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const addTask = (task) => {
        // Ignore if there are only spaces
        if (!task.title || /^\s*$/.test(task.title)) {
            return;
        }

        setTasks([task, ...tasks]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const updateTask = (taskId, updatedTask) => {
        if (!updatedTask.title || /^\s*$/.test(updatedTask.title)) {
            return;
        }

        setTasks((tasks) => tasks.map(task =>(task.id === taskId ? updatedTask : task)))
    }

    const changeTaskStatus = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        }))
    }

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    const filterTasks = () => {
        switch (status) {
            case "completed":
                setFilteredTasks(tasks.filter((task) => task.completed));
                break;
            case "uncompleted":
                setFilteredTasks(tasks.filter((task) => !task.completed));
                break;
            case "all":
                setFilteredTasks(tasks);
                break;
        }
    }

    useEffect(() => {
        filterTasks();
    }, [tasks, status]);

    useEffect(() => {
        saveLocalTasks();
    }, [tasks]);
    
    return (
        <div>
            <div>
                <h2>To Do's</h2>
                <div className="btn-group" role="group" onClick={handleStatus}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        value="all"
                    >All</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        value="uncompleted"
                    >Uncompleted</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        value="completed"
                    >Completed</button>
                </div>
            </div>
            <TaskForm onSubmit={addTask} />
            <div>
                {filteredTasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        removeTask={removeTask}
                        changeTaskStatus={changeTaskStatus}
                        updateTask={updateTask}
                    />
                ))}
            </div>
        </div>
    )
}