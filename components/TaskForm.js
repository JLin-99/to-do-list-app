import { useState, useEffect, useRef } from "react";

export default function TaskForm() {
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

        setInput("");
    }

    return (
        <form onSubmit={handleTaskSubmit}>
            <input
                type="text"
                onChange={handleChange}
                value={input}
                ref={inputRef}
            />
        </form>
    )
}