import { useState } from "react"

export default function Textarea() {
const changeHandler = (e) => {
    setText(e.target.value)
}
const [text, setText] = useState ("")

    return (
        <textarea
        value={text}
        onChange={changeHandler}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"/>
        )
    }