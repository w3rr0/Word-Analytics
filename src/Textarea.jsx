import { useState } from "react"
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
const [message, setMessage] = useState("")

// basic validation for the textarea
const changeHandler = (e) => {
    let newText = e.target.value
    if (newText.includes("<script>")) {
        setMessage("No script tags allowed!");
        newText = newText.replace("<script>", "");
    } else if (/@/.test(newText)) {
        setMessage("No @ symbol allowed!");
        newText = newText.replace("@", "");
    } else {
        setMessage("");
    }
    setText(newText)
}

    return (
        <div className="textarea">
        <textarea
        value={text}
        onChange={changeHandler}
        placeholder="Enter your text"
        spellCheck="false"/>
        <Warning message={message}/>
        </div>
        )
    }