// components
import DictionaryDefinitionCard from './DictionaryDefinitionCard'
import ConditionalWrapper from 'shared/ConditionalWrapper'

function DictionaryListDisplay({definitions}) {

  const mappedDefinitions = definitions.map((d,i) => <DictionaryDefinitionCard key={i} definition={d} />)

  return (
    <div className="grid-columns-large">
      {mappedDefinitions}
    </div>
  )
}

export default ConditionalWrapper(DictionaryListDisplay)
