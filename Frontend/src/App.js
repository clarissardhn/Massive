import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import Ourcampaign from './Pages/Ourcampaign'
import Register from './Pages/Register'
import Galeri from './Pages/Galeri'
import Myplants from './Pages/Myplants'
import Addtanaman from './Pages/Addtanaman'
import Pageprogres from './Pages/Pageprogres'


function App() {
  return (
 <Router>
  <Routes>
    <Route path="/Homepage" element={<Homepage/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/Ourcampaign" element={<Ourcampaign/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/Galeri" element={<Galeri/>} />
    <Route path="/Myplants" element={<Myplants/>} />
    <Route path="/Addtanaman" element={<Addtanaman/>} />
    <Route path="/Pageprogres" element={<Pageprogres/>} />
    
  </Routes>
 </Router>
  )
}

export default App
