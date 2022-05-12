// ROUTER //
import { Routes, Route } from 'react-router-dom'

// COMPONENTS //
import CharacterCreator from './CharacterCreator'
import Dictionary from './Dictionary'
import EventCreator from './EventCreator'

function AppRoutes(props) {

  // RENDER //
  return (
    <Routes>
      <Route path='/' element={<div>Home Route Goes Here</div>} />
      {/* Route for index of terms */}
      <Route path='/dictionary' element={<div>Dictionary Route Goes Here</div>} />
      {/* Route for creating an event */}
      <Route path='/create-event' element={<div>Create Event Route Goes Here</div>} />
      {/* Route for creating a character (creates the character and the event that makes them) */}
      <Route path='/create-character' element={<div>Create Character Route Goes Here</div>} />
    </Routes>
  )

}

export default AppRoutes
