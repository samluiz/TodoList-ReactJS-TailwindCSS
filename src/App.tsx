import React, { useState } from 'react'
import './index.css'
import Layout from './components/Layout'

function App() {

  const [todo, setTodo] = useState<any>("")
  const [allTodos, setAllTodos] = useState<string[]>([])
  const [count, setCount] = useState(0)
  const [viewModal, setViewModal] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [overlay, setOverlay] = useState(false)


// Function to add task
  function handleClick(e: any) {
    if (todo !== "" && todo !== " ") {
      setTodo("")
      setAllTodos([...allTodos, todo])
      setCount(count)
      e.preventDefault()
    }
    
  }

// Function to get the value of the textarea
  function handleChange(e: any) {
    setTodo(e.target.value)
  }

// Function to show pop up when click on clear button
  function clearTodos(e: any) {
    if (viewModal === false) {
      setViewModal(true)
    }
    else {
      setViewModal(false)
    }
      e.preventDefault()
  }


// Function to make button gray when disabled
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

// Function to blur background behind pop up
  function modalOverlay() {
    if (viewModal === true) {
      setOverlay(true)
      return overlay
    }
    else {
      setOverlay(false)
      return overlay
    }
    
  }

// Function to close modal
  function closeModal() {
    if (viewModal === true) {
      setViewModal(false)
    }
  }

// Function to clear all tasks
  function clearTasks() {
    setViewModal(false)
    setAllTodos([])
  }

// Function to clear one task
function removeTask(task: any) {
  setTodo(allTodos.filter((todo) => todo !== task))
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
