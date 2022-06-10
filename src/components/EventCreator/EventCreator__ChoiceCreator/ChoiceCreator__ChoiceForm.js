import { useState } from 'react'

function ChoiceForm() {

  const [choiceData, setChoiceData] = useState({
    name: '',
    description: '',
    probability: 1,
    outcomes: []
  })


  return (
    <p>Add a Choice</p>
  )
}

export default ChoiceForm
