import { Register } from '@features/auth/views/Register'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  )
}
