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
  todo: string;
  allTodos: string[];
  count: number;
  maxLength: number;
  viewModal: boolean;
  setViewModal: boolean;
}

const Layout: React.FC<IProps> = ( {handleClick, handleChange, clearTodos, todo, allTodos, count, viewModal, disableButton, setViewModal, closeModal, clearTasks, modalOverlay} ) => {
  return (
    <>
    {viewModal ? 
      <Modal closeModal={closeModal} clearTasks={clearTasks} /> 
      : null}
    <main className={`  flex justify-center flex-row bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 ${modalOverlay() ? ' blur-sm pointer-events-none' : null} ` }>
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
        <Tasks 
          allTodos={allTodos} 
          count={count} />

          
          
      </main>
    </>
    
  )
}

export default Layout;