function DictionaryDefinitionCard({definition: {name, comparable, boolean, description, eventTypes, filePrefix, recommended}}) {

  const conditionalElement = (name, attribute) => attribute ? <span className="margin-small">{name}: {String(attribute)}</span> : null

  return (
    <div className="border-black flex-column margin-medium">
      {conditionalElement('Name', name)}
      {conditionalElement('Comparable', comparable)}
      {conditionalElement('Boolean', boolean)}
      {conditionalElement('Description', description)}
      {conditionalElement('Event Types', eventTypes)}
      {conditionalElement('File Prefix', filePrefix)}
      {conditionalElement('Recommended Values', recommended)}
    </div>
  )

}

export default DictionaryDefinitionCard
