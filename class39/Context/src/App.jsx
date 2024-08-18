import './App.css'
import Theme from './components/theme/Theme'
import { LanguageProvider } from './contexts/LanguageContext'
// import ToolBar from './components/toolBar/toolBar'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Theme />
     </ThemeProvider>
    </LanguageProvider>
  )
}

export default App

/* O que é Context no React?
  - O useContext, um outro hook, serve para resolver o problema de comunicação de e passagem de props entre componentes (Prop Drilling).  
  - Esse usa uma Api chamada ContextApi, que nos permite criar objetos que podem ser compartilhado entre componentes filhos.
  Existe duas formas de fazer isso, essas estão nos components.
*/