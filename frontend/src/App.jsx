import {Routes, Route} from 'react-router-dom'
// test
import Test from './component/Test'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Test />} ></Route>
    </Routes>
  )
}

export default App
