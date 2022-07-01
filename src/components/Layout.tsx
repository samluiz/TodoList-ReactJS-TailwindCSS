import React from 'react';
import ManageTask from './ManageTask';
import Tasks from './Tasks';
import Image from '../img/List.svg'
import Modal from './Modal'

interface IProps {
  handleClick: (e: any) => void;
  clearTodos: (e: any) => void;
  handleChange: (e: any) => void;
  todo: string;
  allTodos: string[];
  count: number;
  maxLength: number;
  viewModal: boolean;
}

const Layout: React.FC<IProps> = ({handleClick, handleChange, clearTodos, todo, allTodos, count, viewModal}) => {
  return (
    <main className="bg-gradient-to-br from-gray-800 to-teal-700 min-h-screen min-w-full flex justify-center flex-row relative">
        <div className="flex flex-col items-center gap-6">
          <img src={Image} alt="agenda" className="w-40 mt-4 h-40 cursor-pointer" />
          <ManageTask 
            handleClick={handleClick} 
            clearTodos={clearTodos} 
            handleChange={handleChange} 
            todo={todo}
            maxLength={200}
            allTodos={allTodos}
            />
        </div>
        <Tasks 
          allTodos={allTodos} 
          count={count} />
          {viewModal ? <Modal /> : null}
          
      </main>
  )
}

export default Layout;