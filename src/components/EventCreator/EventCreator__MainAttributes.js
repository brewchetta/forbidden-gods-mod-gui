// COMPONENTS //
import FormInput from 'shared/FormInput'
import FormSelect from 'shared/FormSelect'
// DATA //
import * as data from 'data'

function MainAttributes({eventData, handleEventChange, modName, handleChangeModName}) {

  return (
    <>
    <h3>Main Attributes</h3>

    <form>

      <FormInput
        name="mod-prefix"
        labelText="Mod Prefix: "
        onChange={handleChangeModName}
        value={modName}
      />
      <span>Three letter prefix for the events in this mod</span>

      <br/>

      <FormInput
        name="name"
        labelText="Event Name: "
        onChange={handleEventChange}
        value={eventData.name}
      />
      <span>Name of the event</span>

      <br/>

      <FormInput
        name="description"
        labelText="Event Description: "
        onChange={handleEventChange}
        value={eventData.description}
      />
      <span>Text to display to users for the event</span>

      <br/>

      <FormInput
        name="image"
        labelText="Image: "
        onChange={handleEventChange}
        value={eventData.image}
      />
      <span>Stand in for the image file</span>

      <br/>

      <FormInput
        name="imgCredit"
        labelText="Image Credit: "
        onChange={handleEventChange}
        value={eventData.imgCredit}
      />
      <span>Artist who created the image</span>

      <br/>

      <FormInput
        name="modCredit"
        labelText="Mod Credit: "
        onChange={handleEventChange}
        value={eventData.modCredit}
      />
      <span>Author name for who created this mod</span>

      <br/>

      <FormSelect
        name="type"
        labelText="Event Type: "
        onChange={handleEventChange}
        value={eventData.type}
      >
        {data.eventTypes.map(eType => <option key={eType.name} value={eType.name}>{eType.name}</option>)}
      </FormSelect>

      {/* Show selected event description */}
      <span>
        {
          data
          .eventTypes
          .find(e => e.name === eventData.type)
          ?.description
        }
      </span>

      <br/>

      <label htmlFor="probability">Probability: </label>

      <input
        name="probability"
        type="number"
        step="0.01"
        min="0"
        max="1"
        onChange={handleEventChange}
        value={eventData.probability}
      />
      <span>Percent chance (between 0 and 1) that the event will fire when conditions are met</span>

    </form>
    </>
  )

}

export default MainAttributes
