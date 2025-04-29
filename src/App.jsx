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
import Accordain from './components/AnimatedAccordain/Accordain'
import ScrollSpy from './components/ScrollSpy/ScrollSpy'
import Panigation from './components/panigation/Panigation'
import Debouncing from './components/jsconcepts/Debouncing'
import NetflixCarousel from './components/NetflixCarousel/NetflixCarousel'
import Player from './components/YT-Player/Player'
import OnScrollReveal from './components/onScrollRevel/OnScrollReveal'
import SideBar from './components/Animated-Sidebar/SideBar'


function App() {
  return (
    <>
    {/* <Basics />  */}
    {/* 
     <Genstures /> 
     <AnimationControls /> 
    <ViewBasedAnimations /> 
    <ScrollAnimations /> */}
    {/* <DragDrop /> */}
    {/* <RevealText /> */}
    {/* <TextParallex /> */}
    {/* <Aurora /> */}
    {/* <NavSlide /> */}
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

    {/* <Accordain /> */}
    {/* <ScrollSpy /> */}

    {/* <Panigation /> */}
    {/* <Debouncing /> */}
    {/* <div className="bg-[rgba(20,20,20,0.80)] w-full min-h-screen h-fit flex flex-col gap-8 pt-5">
    <NetflixCarousel title={'Action thriller'} />
    <NetflixCarousel title={'Critically Acclaimed TV Shows'} />
    <NetflixCarousel title={'Comedies'} />
    <NetflixCarousel title={'US TV Shows'} />
    </div> */}

    {/* <Player /> */}
    {/* <OnScrollReveal /> */}
    <SideBar />
    </>

  )
}

export default App