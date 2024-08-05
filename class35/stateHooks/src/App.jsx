import './App.css'
import Counter from './components/counter/Counter'
import TabsNavigation from './components/TabsNavigation/TabsNavigation'
import TextArea from './components/TextArea/TextArea'
import ToDo from './components/ToDo/ToDo'

function App() {

  return (
    <main className='container'>
          <Counter />
          <TextArea />
          <ToDo />
          <TabsNavigation />
    </main>
  )
}

export default App
