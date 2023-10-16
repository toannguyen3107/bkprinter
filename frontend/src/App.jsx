import {Routes, Route} from 'react-router-dom'
// test
import Upload from './pages/Print/Upload'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
function App() {
  return (
    <Routes>
      <Route path='/'  >
        <Route index element={<Home/>}/>
        <Route path='print' element={<Upload />}/>
        
        <Route path='*' element={<NoPage />}/>
      </Route>
    </Routes>
  )
}

export default App
