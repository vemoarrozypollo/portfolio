import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { Container } from 'react-bootstrap'
import Abilities from './pages/Abilities'
import ContactMe from './pages/ContactMe'
function App() {

  return (
    <HashRouter>
      <Container className='mt-4 ml-3 mr-3'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/abilities' element={<Abilities/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
