export default function Stats({ numberOfCharacters, numberOfWords }) {
  return (
    <section className="stats">
      <Stat label="Words" number={numberOfWords}/>
      <Stat label="Characters" number={numberOfCharacters}/>
      <Stat label="Instagram" number={280-numberOfCharacters}/>
      <Stat label="Facebook" number={2200-numberOfCharacters}/>
    </section>
  )
}

function Stat({ label, number }) {
    return (
      <section className="stat">
        <span className="stat__number">{number}</span>
        <h2 className="second-heading">{label}</h2>
      </section>
    )}