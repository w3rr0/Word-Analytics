import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "./constants"

export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat label="Words" number={stats.numberOfWords}/>
      <Stat label="Characters" number={stats.numberOfCharacters}/>
      <Stat label="Instagram" number={INSTAGRAM_MAX_CHARACTERS-stats.numberOfCharacters}/>
      <Stat label="Facebook" number={FACEBOOK_MAX_CHARACTERS-stats.numberOfCharacters}/>
    </section>
  )
}

function Stat({ label, number }) {
    return (
      <section className="stat">
        <span className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
        <h2 className="second-heading">{label}</h2>
      </section>
    )}