import { RiEdit2Fill, RiDeleteBack2Fill } from "react-icons/ri"
import styles from '../styles/task.module.css';

export default function Task({ id, text, notes, completed, removeTask, completeTask }) {

    return (
        <div className={`task-wrapper ${completed ? styles.completed : ""}`}>
            <div className="left-control">
                <input type="checkbox" onClick={() => completeTask(id)}></input>
                <div className="task-control" onClick={() => completeTask(id)}>t</div>
            </div>
            <div className="task-content">
                <div className="task-body">
                    <div className="task-title">{text}</div>
                    <div className="task-notes">{notes}</div>
                </div>
                <div className="icons">
                    <RiEdit2Fill
                    />
                    <RiDeleteBack2Fill
                        onClick={() => removeTask(id)}
                    />
                </div>
            </div>
        </div>
    )
}