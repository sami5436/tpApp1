import Navbar from "./Navbar"
import Tickets from "./pages/fPages/Tickets"
import Home from "./pages/nPages/Home"
import Events from "./pages/nPages/Events"
import Login from "./pages/nPages/Login"
import Contact from "./pages/fPages/Contact"
import Footer from "./pages/fPages/Footer"
import TOS from "./pages/fPages/TOS"
import AdminL from "./pages/fPages/AdminL"
import Attractions from "./pages/nPages/Attractions"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Attractions" element={<Attractions />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TOS" element={<TOS />} />
          <Route path="/AdminL" element={<AdminL />} />


        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App
