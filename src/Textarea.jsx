import { useState } from "react"
import Warning from "./Warning";

export default function Textarea() {
const [text, setText] = useState ("")
const [message, setMessage] = useState("")

const changeHandler = (e) => {
    let newText = e.target.value
    if (newText.includes("<script>")) {
        setMessage("No script tags allowed!");
        newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
        setMessage("No @ symbol allowed!");
        newText = newText.replace("@", "");
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