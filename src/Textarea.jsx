import { useState } from "react"
import Warning from "./Warning";

export default function Textarea() {
const [text, setText] = useState ("")
const [warning, setWarning] = useState(false)

const changeHandler = (e) => {
    let newText = e.target.value
    if (newText.includes("<script>")) {
        setWarning(true);
        newText = newText.replace("<script>", "");
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
        {warning ? <Warning /> : null}
        </div>
        )
    }