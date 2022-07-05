import React, { useState } from 'react'
import './index.css'
import Layout from './components/Layout'

function App() {

  const [todo, setTodo] = useState("")
  const [allTodos, setAllTodos] = useState<string[]>([])
  const [count, setCount] = useState(0)
  const [viewModal, setViewModal] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [overlay, setOverlay] = useState(false)

  function handleClick(e: any) {
    if (todo !== "" && todo !== " ") {
      setTodo("")
      setAllTodos([...allTodos, todo])
      setCount(count)
    }
    e.preventDefault()
  }

  function handleChange(e: any) {
    setTodo(e.target.value)
  }

  function clearTodos(e: any) {
    if (viewModal === false) {
      setViewModal(true)
    }
    else {
      setViewModal(false)
    }
      e.preventDefault()
  }

  function disableButton() {
    if (allTodos.length < 1) {
      setIsDisabled(true)
      return isDisabled
    }
    else {
      setIsDisabled(false)
      return isDisabled
    }
  }

  function modalOverlay() {
    if (viewModal === true) {
      console.log("yes")
      setOverlay(true)
      return overlay
    }
    else {
      setOverlay(false)
      return overlay
    }
    
  }

  function closeModal() {
    if (viewModal === true) {
      setViewModal(false)
    }
  }

  function clearTasks() {
    setViewModal(false)
    setAllTodos([])
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
        disableButton={disableButton}
        setViewModal={true}
        closeModal={closeModal}
        clearTasks={clearTasks}
        modalOverlay={modalOverlay}
        />
    </>
      
  )
}

export default App;
