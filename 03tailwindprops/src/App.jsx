import { useState } from 'react'
import Card from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : 'arjun',
    age : 21
  }

  let newArr = [1,2,3,4]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="bg-green-400 text-black p-4 rounded-3xl text-3xl font-bold mb-6">
        Tailwind CSS Cards
      </h1>

      <Card username = "arjunuit" someObj = {myObj}  btnText = "click me"/>
      <Card btnText = "read me" />

    </div>
  )
}

export default App
