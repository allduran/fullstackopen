import { useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const updatedPersons = persons.concat(personObject)
    setPersons(updatedPersons)
    setFilteredPersons(updatedPersons)
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    const search = event.target.value
    setNewSearch(search)

    const filtered = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredPersons(search !== '' ? filtered : persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <span>filter shown with</span>
      <Filter search={newSearch} handleSearchChange={handleSearchChange} />
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => <Person key={person.id} person={person} />)}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App