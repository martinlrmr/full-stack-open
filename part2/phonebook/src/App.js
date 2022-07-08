import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const namesToShow = !filter
    ? persons
    : persons.filter(person => person.name.match(filter))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setPersons(prevState => prevState.concat([{name: newName, number: newNumber}]))
    setNewName("")
    setNewNumber("")
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with:
          <input
            value={filter}
            onChange={handleFilter}
          />
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
          </div>
          <div>
          number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {namesToShow.map((person, index) => (
        <p key={index}>{person.name} {person.number}</p>
      ))}

    </div>
  )
}

export default App