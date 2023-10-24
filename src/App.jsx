import FuzzyOverlay from "./Components/FuzzyOverlay"
import Envtiroment from "./Treejs/Envtiroment"

function App() {
  return (
    <div className="h-[100vh] bg-[#1f1f22f4] relative overflow-hidden">
      <FuzzyOverlay opacity={3}/>
      <Envtiroment/>
    </div>
  )
}

export default App
