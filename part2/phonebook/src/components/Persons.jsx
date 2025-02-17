//Persons.jsx
const Persons = ({ persons, removePerson }) => {
  return (
    <>
      <ul>
        {persons.map((person) => (
          <li key={person.id} className="person">
            <span className="data">{person.name} {person.number}</span>
            <button onClick={() => removePerson(person.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Persons;
