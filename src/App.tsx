import { useState } from "react"
import Main from "./components/Main"
import HeroSection from "./components/sections/HeroSection"
import ModeSelectionSection from "./components/sections/ModeSelectionSection"

export default function App() {
   const [section, setSection] = useState(0)

   return (
      <Main>
         { section === 0 && <HeroSection onContinue={() => setSection(1)} /> }
         { section === 1 && <ModeSelectionSection onContinue={() => setSection(2)} /> }
      </Main>
   )
}