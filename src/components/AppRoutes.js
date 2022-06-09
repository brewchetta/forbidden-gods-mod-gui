// ROUTER //
import { Routes, Route } from 'react-router-dom'

// COMPONENTS //
import CharacterCreator from './CharacterCreator'
import Dictionary from './Dictionary'
import EventCreator from './EventCreator'

// CONTEXT //
import { ModContextProvider } from 'context/ModContext'

function AppRoutes(props) {

  // RENDER //
  return (
    <ModContextProvider>

      <Routes>
        <Route path='/' element={<div>Home Component</div>} />
        {/* Route for index of terms */}
        <Route path='/dictionary' element={<Dictionary />} />
        {/* Route for creating an event */}
        <Route path='/create-event' element={<EventCreator />} />
        {/* Route for creating a character (creates the character and the event that makes them) */}
        <Route path='/create-character' element={<CharacterCreator />} />
      </Routes>

    </ModContextProvider>
  )

}

export default AppRoutes
