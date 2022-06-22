import { useEffect, useRef, useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import styles from '../styles/taskedit.module.css';

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
                <div>
                    <h2>Edit To Do</h2>
                    <RiCloseCircleFill
                        onClick={handleClose}
                    />
                </div>
                <div>
                    <h3>Title</h3>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={editInput.title}
                        autoFocus
                    />
                </div>
                <div>
                    <h3>Notes</h3>
                    <textarea
                        type="text"
                        name="notes"
                        onChange={handleChange}
                        value={editInput.notes}
                    />
                </div>
                <div>
                    <button onClick={handleEditSubmit}>Save</button>
                    <button onClick={() => removeTask(task.id)}>Delete To Do</button>
                </div>
            </div>
        </div>
    ) : "";
}