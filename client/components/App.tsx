// Import Outlet
import { Outlet } from 'react-router'

// Create App function
function App() {
  return (
    <div className="App">
      <h1>Portfolio</h1>
      <Outlet />
    </div>
  )
}

// Export App function
export default App
