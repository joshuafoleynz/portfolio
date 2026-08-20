// Import Outlet
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="App">
      <h1>Portfolio</h1>
      <Outlet />
    </div>
  )
}

export default App