import {Routes, Route} from 'react-router-dom'
// test
import PageExample from './pages/PageExample'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageExample />} ></Route>
    </Routes>
  )
}

export default App
