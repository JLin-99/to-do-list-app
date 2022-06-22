import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        // Ignore if there are only spaces
        if(!task.text || /^\s*$/.test(task.text)) {
            return;
        }

        setTasks([task, ...tasks]);
    }

    return (
        <div>
            <TaskForm onSubmit={addTask}/>
            <div>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        text={task.text}
                        notes={task.notes}
                    />
                ))}
            </div>
        </div>
    )
}