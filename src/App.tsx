import React, { useState } from 'react'
import './index.css'
import Layout from './components/Layout'

function App() {

  const [todo, setTodo] = useState("")
  const [allTodos, setAllTodos] = useState<string[]>([])
  const [count, setCount] = useState(0)
  const [viewModal, setViewModal] = useState(false)

  console.log(setViewModal)

  function handleClick(e: any) {
    if (todo !== "" && todo !== " ") {
      setTodo("")
      setAllTodos([...allTodos, todo])
      setCount(count)
      if (allTodos.length == 9) {
       setViewModal(true)       
      }
    }
    e.preventDefault()
  }

  function handleChange(e: any) {
    setTodo(e.target.value)
  }

  function clearTodos(e: any) {
    setAllTodos([])
    setViewModal(false)
    e.preventDefault()
  }

  return (
    <>
      <Layout 
        handleClick={handleClick} 
        clearTodos={clearTodos} 
        handleChange={handleChange} 
        todo={todo} 
        allTodos={allTodos} 
        count={count}
        maxLength={200}
        viewModal={viewModal}
        />
    </>
      
  )
}

export default App;
