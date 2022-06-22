import { RiEdit2Fill, RiDeleteBack2Fill } from "react-icons/ri"

export default function Task({ text, notes }) {
    return (
        <div className="task-wrapper">
            <div className="left-control">
                <div className="task-control"></div>
            </div>
            <div className="task-content">
                <div className="task-body">
                    <div className="task-title">{text}</div>
                    <div className="task-notes">{notes}</div>
                </div>
                <div className="icons">
                    <RiEdit2Fill />
                    <RiDeleteBack2Fill />
                </div>
            </div>
        </div>
    )
}