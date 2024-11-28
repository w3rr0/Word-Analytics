export default function Textarea() {
const changeHandler = (e) => {
    console.log(e.target.value)
}

    return (
        <textarea onChange={changeHandler}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"/>
        )
    }