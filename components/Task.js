import { RiEdit2Fill, RiDeleteBack2Fill, RiCheckboxFill, RiCheckboxBlankLine } from "react-icons/ri"
import { useState } from "react";
import styles from '../styles/task.module.css';
import TaskEdit from "./TaskEdit";

export default function Task({ task, removeTask, changeTaskStatus, updateTask }) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <>
            <div className={`task-wrapper ${task.completed ? styles.completed : ""}`}>
                <div className="left-control">
                    <div className="task-control" onClick={() => changeTaskStatus(task.id)}>
                        {task.completed ? (
                            <RiCheckboxFill />
                        ) : (
                            <RiCheckboxBlankLine />
                        )
                        }
                    </div>
                </div>
                <div className="task-content">
                    <div className="task-body" onClick={() => setOpenEdit(true)}>
                        <div className="task-title">{task.title}</div>
                        <div className="task-notes">{task.notes}</div>
                    </div>
                    <div className="icons">
                        <RiEdit2Fill
                            onClick={() => setOpenEdit(true)}
                        />
                        <RiDeleteBack2Fill
                            onClick={() => removeTask(task.id)}
                        />
                    </div>
                </div>

            </div>
            <TaskEdit
                trigger={openEdit}
                setTrigger={setOpenEdit}
                task={task}
                updateTask={updateTask}
                removeTask={removeTask}
            />
        </>
    )
}