import './App.css'
import LimitedCounter from './components/limitedCounter/LimitedCounter'
import PersistentCounter from './components/persistentCounter/PersistentCounter'
import RealTimeClock from './components/realTimeClock/RealTimeClock'
import TitleUpdater from './components/titleUpdater/titleUpdater'
import ToggleText from './components/toggleText/ToggleText'
import WindowSize from './components/WindowSize/WindowSize'

function App() {
  return (
    <main>
      <TitleUpdater />
      <WindowSize />
      <PersistentCounter />
      <RealTimeClock />
      <ToggleText />
      <LimitedCounter />
    </main>
  )
}

export default App
