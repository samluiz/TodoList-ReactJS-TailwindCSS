import React from 'react';
import ManageTask from './ManageTask';
import Tasks from './Tasks';
import Image from '../img/List.svg'
import Modal from './Modal'

interface IProps {
  handleClick: (e: any) => void;
  clearTodos: (e: any) => void;
  handleChange: (e: any) => void;
  disableButton: () => boolean;
  closeModal: () => void;
  clearTasks: () => void;
  modalOverlay: () => boolean;
  editTask: (e: any) => void;
  todo: string;
  allTodos: string[];
  count: number;
  maxLength: number;
  viewModal: boolean;
  setViewModal: boolean;
}

const Layout: React.FC<IProps> = ( {handleClick, handleChange, clearTodos, todo, allTodos, count, viewModal, disableButton, setViewModal, closeModal, clearTasks, modalOverlay, editTask} ) => {
  return (
    <>
    {viewModal ? 
      <Modal closeModal={closeModal} clearTasks={clearTasks} /> 
      : null}
     <div className={` ${modalOverlay() ? ' blur-sm pointer-events-none' : null} ` }>
    
    <main className={`  grid place-items-center grid-rows-2 grid-flow-col flex-row min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 `}>
        <div className="flex flex-col items-center gap-6">
          <img src={Image} alt="agenda" className="w-40 mt-4 h-40 cursor-pointer" />
          <ManageTask 
            handleClick={handleClick} 
            clearTodos={clearTodos} 
            handleChange={handleChange} 
            todo={todo}
            maxLength={200}
            allTodos={allTodos}
            disableButton={disableButton}

            />
        </div>
       
      </main>
      <section className='min-h-screen flex flex-row justify-evenly'>
      <Tasks 
          allTodos={allTodos} 
          count={count}
          editTask={editTask} />
      </section>
    </div>
    </>
   
    
  )
}

export default Layout;