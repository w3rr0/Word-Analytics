import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
    const [text, setText] = useState("")
    const numberOfCharacters = text.length;
    const numberOfWords = text.split(/\s+/).filter(word => word.trim().length > 0).length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Stats numberOfCharacters={numberOfCharacters} numberOfWords={numberOfWords}/>
    </main>
  )
}