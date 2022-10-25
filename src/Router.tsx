import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard'
import { SignIn } from './Pages/SignIn'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
