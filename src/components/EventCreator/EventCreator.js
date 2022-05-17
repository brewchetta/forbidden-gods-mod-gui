function EventCreator() {

  // what this needs:

    // context for mod name

    // input to retitle event name etc

    // input to add event description and general attributes, choose what type of event

    // EVENT ATTRIBUTES are:

      // id - text prefixed by mod name
      // name - text
      // description - textarea with ability to insert things like pronouns, identifiers
      // image - filename or text - able to upload file to see image
      // imgCredit - required text
      // modCredit - username or text
      // type - dropdown for event types
      // conditional - conditional builder component
      // probability - number between 0 and 1
      // choices - should be its own component area

  return (
    <div>
      Event Creator

    </div>
  )

}

export default EventCreator
