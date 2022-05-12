// ROUTER //
import { Link } from 'react-router-dom'

function AppNavbar(props) {

  // RENDER //
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/dictionary'>Dictionary</Link>
      <Link to='/create-event'>Create Event</Link>
      <Link to='/create-character'>Create Character</Link>
    </div>
  )

}

export default AppNavbar
