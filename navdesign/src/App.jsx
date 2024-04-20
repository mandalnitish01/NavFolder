import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import card from './CardComponents/card'



function App() {
  return (
    <>
    <Nav LogoName="VNC" />
    <card/>
    </>
  )
}
export default App
