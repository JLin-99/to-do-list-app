import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
    const [tasks, setTasks] = useState([])

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

    return (
        <div>
            <TaskForm onSubmit={addTask} />
            <div>
                {tasks.map(task => (
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