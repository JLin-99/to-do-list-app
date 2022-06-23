import { useState } from "react";
import { RiCloseCircleFill, RiDeleteBin5Fill } from "react-icons/ri";
import { MdSaveAlt } from "react-icons/md"
import styles from "../styles/taskedit.module.css";

export default function TaskEdit({ trigger, task, setTrigger, updateTask, removeTask }) {
    const [editInput, setEditInput] = useState({
        ...task
    })

    const handleChange = (e) => {
        switch (e.target.name) {
            case "title":
                setEditInput({
                    ...editInput,
                    title: e.target.value,
                });
                break;
            case "notes":
                setEditInput({
                    ...editInput,
                    notes: e.target.value,
                });
        }
    }

    const handleEditSubmit = () => {
        updateTask(task.id, editInput);
        setTrigger(false);
    }

    const handleClose = () => {
        setEditInput(task);
        setTrigger(false);
    }

    return (trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <div className={styles.heading}>
                    <h2>Edit To Do</h2>
                    <button
                        onClick={handleClose}
                        className={styles.iconBtn}>
                        <RiCloseCircleFill />
                    </button>
                </div>
                <div className={styles.formGroup}>
                    <div>
                        <label className={styles.label}>Title</label>
                    </div>
                    <input
                        className={styles.formControl}
                        type="text"
                        name="title"
                        placeholder="Add a title"
                        onChange={handleChange}
                        value={editInput.title}
                        autoFocus
                    />
                </div>
                <div className={styles.formGroup}>
                    <div>
                        <label className={styles.label}>Notes</label>
                    </div>
                    <textarea
                        className={styles.formControl}
                        type="text"
                        name="notes"
                        onChange={handleChange}
                        value={editInput.notes}
                    />
                </div>
                <div className={styles.fGroup3}>
                    <div className={styles.fLeft}></div>
                    
                    <div className={styles.fCenter}>
                        <button
                            className={styles.flexBtn}
                            onClick={handleEditSubmit}>
                            <MdSaveAlt className={styles.iconBtn}/>&nbsp;&nbsp;Save
                        </button>
                    </div>
                    <div className={styles.fRight}>
                        <button
                            className={styles.iconBtn}
                            onClick={() => removeTask(task.id)}>
                            <RiDeleteBin5Fill />
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    ) : "";
}