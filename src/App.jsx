import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'

function App() {
  const [view, setView] = useState('landing')

  useEffect(() => {
    const handleNavigateDashboard = () => setView('dashboard')
    window.addEventListener('navigate-dashboard', handleNavigateDashboard)
    return () => window.removeEventListener('navigate-dashboard', handleNavigateDashboard)
  }, [])

  if (view === 'dashboard') {
    return <Dashboard onLogout={() => setView('landing')} />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
      <LogIn />
    </div>
  )
}

export default App