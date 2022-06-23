import { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import style from "../styles/tasklist.module.css";


export default function TaskList({ defaultTasks }) {
    const [tasks, setTasks] = useState([]);
    const [filterType, setFilterType] = useState("all");
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        getLocalTasks();
    }, []);

    const getLocalTasks = () => {
        if (localStorage.getItem("tasks") === null) {
            setTasks(defaultTasks);
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
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const updateTask = (taskId, updatedTask) => {
        if (!updatedTask.title || /^\s*$/.test(updatedTask.title)) {
            return;
        }

        setTasks((tasks) => tasks.map(task => (task.id === taskId ? updatedTask : task)));
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

    const handleListStatus = (e) => {
        setFilterType(e.target.value);
    }

    const filterTasks = () => {
        switch (filterType) {
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
    }, [tasks, filterType]);

    useEffect(() => {
        saveLocalTasks();
    }, [tasks]);

    return (
        <div className={style.container}>
            <div className={style.heading}>
                <h2 className={style.headingLg}>To Do's</h2>
                <div className={style.statusTabs} onChange={handleListStatus}>
                    <input
                        type="radio"
                        id="tabCompleted"
                        name="statusTab"
                        value="completed">
                    </input>
                    <label htmlFor="tabCompleted">Complete</label>
                    <input
                        type="radio"
                        id="tabUncompleted"
                        name="statusTab"
                        value="uncompleted">
                    </input>
                    <label htmlFor="tabUncompleted">Active</label>

                    <input
                        type="radio"
                        id="tabAll"
                        name="statusTab"
                        defaultChecked
                        value="all">
                    </input>
                    <label htmlFor="tabAll">All</label>
                </div>
            </div>
            <div className={style.listContainer}>
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
        </div>
    )
}