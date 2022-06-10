// REACT //
import { useState } from 'react'
// UTILS //
import { toSnakeCase } from 'utils/string'
// COMPONENTS //
import MainAttributes from './EventCreator__MainAttributes'
import ConditionsSelect from './EventCreator__ConditionsSelect'
import ChoiceCreator from './EventCreator__ChoiceCreator'
// CONTEXT //
import { useModContext } from 'context/ModContext'

function EventCreator() {

  // STATE //

  const { modData, setModData } = useModContext()
  const modName = modData.name

  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    image: '',
    imgCredit: '',
    modCredit: '',
    type: 'MIDCHALLENGE',
    conditionals: '',
    probability: 0.5,
  })

  const [choices, setChoices] = useState([])

  // EVENTS //

  const handleChangeModName = e => {
    setModData( prev => ({ ...prev, name: toSnakeCase(e.target.value) }) )
  }

  const handleEventChange = e => {
    setEventData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleAddConditional = conditional => {
    const newConditionals = eventData.conditionals + `${ eventData.conditionals.length ? ' & ' : '' }(${conditional.name}${conditional.comparable ? ' = ???' : ''})`
    setEventData(prev => ({...prev, conditionals: newConditionals}))
  }

  const handleAddChoice = choice => setChoices(prev => ([...prev, choice]))
  const handleRemoveChoice = choice => setChoices(prev => prev.filter(c => c !== choice))

  // RENDER //

  return (
    <div>

      <h2>Event Creator</h2>

      <MainAttributes
        eventData={eventData}
        handleEventChange={handleEventChange}
        modName={modName}
        handleChangeModName={handleChangeModName}
      />

      <ConditionsSelect
        handleEventChange={handleEventChange}
        handleAddConditional={handleAddConditional}
        conditionals={eventData.conditionals}
      />

      <ChoiceCreator
        choices={choices}
        handleAddChoice={handleAddChoice}
        handleRemoveChoice={handleRemoveChoice}
      />

      <br/>

      <code>
      </code>

    </div>
  )

}

export default EventCreator

// what this needs:

  // EVENT ATTRIBUTES are:

    // id - text prefixed by mod name
    // name - text
    // description - textarea with ability to insert things like pronouns, identifiers
    // image - filename or text - able to upload file to see image
    // choices - should be its own component area
