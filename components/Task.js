import { RiEdit2Fill, RiCheckLine, RiDeleteBin5Fill } from "react-icons/ri"
import { useState } from "react";
import styles from "../styles/task.module.css";
import TaskEdit from "./TaskEdit";
import ReactMarkdown from "react-markdown";

export default function Task({ task, removeTask, changeTaskStatus, updateTask }) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <>
            <div className={`${styles.taskWrapper} ${task.completed ? styles.completed : ""}`}>
                <div className={styles.leftControl}>
                    <div className={styles.taskControl} onClick={() => changeTaskStatus(task.id)}>
                        <RiCheckLine
                            className={`${styles.checkBtn} ${task.completed ? styles.check : ""}`} />
                    </div>
                </div>
                <div className={styles.taskContent}>
                    <div className={styles.taskClickable} onClick={() => setOpenEdit(true)}>
                        <h3 className={styles.taskTitle}>{task.title}</h3>
                        {task.notes ? (
                            <ReactMarkdown children={task.notes} className={styles.taskNotes} />
                        ) : (<></>)}

                    </div>

                    <div className={styles.fGroup3}>
                        <div className={styles.fLeft}></div>

                        <div className={styles.fCenter}>
                            <button
                                className={styles.iconBtn}
                                onClick={() => setOpenEdit(true)}>
                                <RiEdit2Fill />
                            </button>
                        </div>
                        <div className={styles.fRight}>
                            <button
                                onClick={() => removeTask(task.id)}>
                                <RiDeleteBin5Fill />
                            </button>
                        </div>

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