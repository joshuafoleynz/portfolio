import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App'
import Home from './components/Home'

const router = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
  </Route>,
)

export default router