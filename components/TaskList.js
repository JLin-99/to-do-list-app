import { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTasks, setFilteredTasks] = useState([]);

    const addTask = (task) => {
        // Ignore if there are only spaces
        if (!task.text || /^\s*$/.test(task.text)) {
            return;
        }

        setTasks([task, ...tasks]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const completeTask = (id) => {
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
                        id={task.id}
                        text={task.text}
                        notes={task.notes}
                        completed={task.completed}
                        removeTask={removeTask}
                        completeTask={completeTask}
                    />
                ))}
            </div>
        </div>
    )
}