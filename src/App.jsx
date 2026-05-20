import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Deadlines from './pages/Deadlines'
import Coach from './pages/Coach'
import Prep from './pages/Prep'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/coach"     element={<Coach />} />
          <Route path="/prep"      element={<Prep />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
