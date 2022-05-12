// ROUTER //
import { Routes, Route } from 'react-router-dom'

function AppRoutes(props) {

  // RENDER //
  return (
    <Routes>
      <Route path='/' element={<div>Home Route Goes Here</div>} />
      {/* Route for index of terms */}
      {/* Route for creating an event */}
      {/* Route for creating a character (creates the character and the event that makes them) */}
    </Routes>
  )

}

export default AppRoutes
