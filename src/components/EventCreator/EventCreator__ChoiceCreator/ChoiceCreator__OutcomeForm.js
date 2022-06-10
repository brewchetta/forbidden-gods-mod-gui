import { useState } from 'react'
import FormInput from 'shared/FormInput'

function OutcomeForm() {

  // STATE //

  const [outcomeData, setOutcomeData] = useState({
    weight: 1,
    environment: [],
    effects: []
  })

  const [environmentFormData, setEnvironmentFormData] = useState({key: '', value: 0, local: false})
  const [effectFormData, setEffectFormData] = useState({command: 'GAIN_POWER', argument: '1'})

  // EVENTS //

  const resetEnvironmentFormData = () => setEnvironmentFormData({key: '', value: 0, local: false})
  const resetEffectFormData = () => setEffectFormData({command: 'GAIN_POWER', argument: 1})

  const addEnvironmentVar = () => {
    setOutcomeData(prev => ({...prev, environment: [...prev.environment, environmentFormData]}))
    resetEnvironmentFormData()
  }

  const addEffect = () => {
    setOutcomeData(prev => ({...prev, effects: [...prev.effects, effectFormData]}))
    resetEffectFormData()
  }

  const removeEnvironmentVar = envVar => {
    const filteredEnvVars = outcomeData.environment.filter(e => e !== envVar)
    setOutcomeData(prev => ({...prev, environment: filteredEnvVars}))
  }

  const removeEffect = effect => {
    const filteredEffects = outcomeData.effects.filter(e => e !== effect)
    setOutcomeData(prev => ({...prev, effects: filteredEffects}))
  }

  const handleOutcomeChange = ({target}) => setOutcomeData(prev => ({...prev, [target.name]: target.value}))

  const handleEnvironmentChange = ({target}) => setEnvironmentFormData(prev => ({...prev, [target.name]: target.value}))

  const handleEffectChange = ({target}) => setEffectFormData(prev => ({...prev, [target.name]: target.value}))

  // RENDER //

  const mappedEnvVars = outcomeData.environment
    .map(envVar => <p onClick={() => removeEnvironmentVar(envVar)}>key: {envVar.key}, value: {envVar.value}, local: {envVar.local}</p>)

  const mappedEffects = outcomeData.effects
    .map(effect => <p onClick={() => removeEffect(effect)}>command: {effect.command}, argument: {effect.argument}</p>)

  return (
    <div>

      <h4>New Outcome For Choice</h4>

      <FormInput
        name="weight"
        labelText="Weight: "
        onChange={handleOutcomeChange}
        value={outcomeData.weight}
      />

      <div>

        <FormInput
          name="key"
          labelText="Variable Key: "
          onChange={handleEnvironmentChange}
          value={environmentFormData.key}
        />

        <FormInput
          name="value"
          labelText="Variable Value: "
          onChange={handleEnvironmentChange}
          value={environmentFormData.value}
        />

        <FormInput
          name="local"
          labelText="Local: "
          onChange={handleEnvironmentChange}
          value={environmentFormData.local}
        />

        <button onClick={addEnvironmentVar}>Add Environment Variable</button>

        {mappedEnvVars}

      </div>

      <div>

        <FormInput
          name="command"
          labelText="Effect Command: "
          onChange={handleEffectChange}
          value={effectFormData.command}
        />

        <FormInput
          name="argument"
          labelText="Effect Argument: "
          onChange={handleEffectChange}
          value={effectFormData.argument}
        />

        <button onClick={addEffect}>Add Effect</button>

        {mappedEffects}

      </div>



    </div>
  )
}

export default OutcomeForm

// {
//   "weight": 1,
//   "environment": [
// 		{ "key": "BRW_SUITABLE_RAT_EVENT", "value": "turn + 40", "local":"False" },
// 		{ "key": "BRW_NEXT_SUITABLE_EVENT", "value": "turn + 20", "local":"False" }
//   ],
//   "effects": [
//     { "command": "GAIN_INFILTRATION", "argument": "1" },
//     { "command": "GAIN_GOLD", "argument": "30" }
//   ]
// }
