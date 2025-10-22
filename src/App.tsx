import { Loading } from '@shared/views/Loading'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Loading />
    </BrowserRouter>
  )
}
