import Card from './components/Card'
import './App.css'

function App() {

  let newarr = [1,2,3]
  

  return (
   <>
   <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username='saikumar' post="Staff Engineer, Algolia"/>
    <Card username='hitesh' post="Software engineer" myArr={newarr}/>
    <Card />
   </>
  )
}

export default App
