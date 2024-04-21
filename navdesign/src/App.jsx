import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import card from './CardComponents/card'
import Mentor from './MentoeComp/Mentor'



function App() {
  return (
    <>
    <Nav LogoName="VNC" /> 
    <Mentor UserName="Nitish" Qualifications="Frontend Dev@google"/> 
    <Mentor UserName="Nitish" Qualifications="Frontend Dev@google"/> 
    <Mentor UserName="Nitish" Qualifications="Frontend Dev@google"/> 
    </>
  )
}
export default App
