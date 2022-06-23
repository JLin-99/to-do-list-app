import { useState, useEffect, useRef } from "react";
import styles from "../styles/taskedit.module.css";
import { AiOutlineEnter } from "react-icons/ai";

export default function TaskForm({ onSubmit }) {
    const [input, setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleTaskSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: (new Date()).getTime(),
            title: input,
            notes: "",
            completed: false
        });

        setInput("");
    }

    return (
        <form onSubmit={handleTaskSubmit}
            className={`${styles.formControl}
                ${styles.mb1} ${styles.formBox}`}>
            <input
                type="text"
                placeholder="Add a To Do"
                onChange={handleChange}
                value={input}
                ref={inputRef}
            />
            <button className={styles.iconBtn}>
                <AiOutlineEnter />
            </button>
        </form>
    )
}