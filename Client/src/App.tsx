import './App.css'
import { NavbarDefault } from './components/Navbar'
import { TransactionsData } from './components/TransactionsData'
import { Landing } from './components/Welome'

function App() {
  return (
    <>
    <NavbarDefault />
    <Landing />
    <TransactionsData />
    </>
  )
}

export default App
