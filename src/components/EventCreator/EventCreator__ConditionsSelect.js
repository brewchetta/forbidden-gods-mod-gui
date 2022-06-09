// REACT //
import { useState } from 'react'
// COMPONENTS //
import FormInput from 'shared/FormInput'
import FormSelect from 'shared/FormSelect'
// DATA //
import * as data from 'data'

function ConditionsSelect({conditionals, handleEventChange, handleAddConditional}) {

  const [selectedConditional, setSelectedConditional] = useState('turn')
  const selectedConditionalObj = data.conditionals.find(c => c.name === selectedConditional)

  const handleSelectConditional = e => setSelectedConditional(e.target.value)

  return (
    <>
      <h3>Conditions</h3>

      <FormSelect
        name="conditional-options"
        labelText="Add A Conditional: "
        onChange={handleSelectConditional}
        value={selectedConditional}
      >
        { data.conditionals.map( c => <option key={c.name} value={c.name}>{c.name}</option> ) }
      </FormSelect>

      <p>{selectedConditionalObj.description}</p>

      <p>Event Types: {selectedConditionalObj.eventTypes.join(', ')}</p>

      <button onClick={() => handleAddConditional(selectedConditionalObj)}>Add Conditional</button>

      <br/>

      <FormInput
        name="conditionals"
        labelText="Trigger Conditions: "
        onChange={handleEventChange}
        value={conditionals}
      />
    </>
  )

}

export default ConditionsSelect
