// REACT //
import { useState } from 'react'

// COMPONENTS //
import AppRoutes from "./AppRoutes"
import AppNavbar from "./AppNavbar"

function App() {

  // RENDER //
  return (
    <div className='App'>
      <AppNavbar />
      <AppRoutes />
    </div>
  );
}

export default App;
