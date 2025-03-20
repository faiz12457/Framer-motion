import React from 'react'
import Basics from './components/Basics/Basics'
import Genstures from './components/Basics/Genstures'
import AnimationControls from './components/Basics/AnimationControls'
import ViewBasedAnimations from './components/Basics/ViewBasedAnimations'
import ScrollAnimations from './components/Basics/ScrollAnimations'
import DragDrop from './components/DragDrop/DragDrop'
import RevealText from './components/textanimation/RevealText'
import TextParallex from './components/AppleScrollAnimation/textParallex'
import Aurora from './components/AuroraEffect/Aurora'
import NavSlide from './components/NavSlide/NavSlide'
import ScrollParallex from './components/SmoothScrollParallex/ScrollParallex'
import DropDown from './components/AnimatedDropdown/DropDown'
import TiltCard from './components/TiltCardOnHover/TiltCard'
import Nav, { Text } from './components/HideNavOnScroll/Nav'


function App() {
  return (
    <>
    {/* <Basics /> 
     <Genstures /> 
     <AnimationControls /> 
    <ViewBasedAnimations /> 
    <ScrollAnimations /> */}
    {/* <DragDrop /> */}
    {/* <RevealText /> */}
    {/* <TextParallex /> */}
    {/* <Aurora /> */}
    <NavSlide />
    {/* <ScrollParallex /> */}
    {/* <DropDown /> */}
    {/* <TiltCard /> */}
    {/* <Nav /> */}
    {/* {
      Array.from({length:20}).map(()=>{
        return <Text />
      })
    }
    <Text /> */}
    </>

  )
}

export default App