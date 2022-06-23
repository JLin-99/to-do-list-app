import { useState, useEffect, useRef } from "react";
import styles from "../styles/taskedit.module.css"

export default function TaskForm(props) {
    const [input, setInput] = useState("");

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleTaskSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: (new Date()).getTime(),
            title: input,
            notes: "",
            completed: false
        });

        setInput("");
    }

    return (
        <form onSubmit={handleTaskSubmit}>
            <input
                className={`${styles.formControl} ${styles.mb1}`}
                type="text"
                onChange={handleChange}
                value={input}
                ref={inputRef}
            />
        </form>
    )
}