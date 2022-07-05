import React from 'react';

interface IProps {
  closeModal: () => void;
  clearTasks: () => void;
}


const Modal: React.FC<IProps> = ( {closeModal, clearTasks} ) => {
  return (
    <div className='bg-white w-72 h-72 fixed top-1/2 mt-[-144px] left-1/2 ml-[-144px] rounded-3xl grid place-items-center p-6 drop-shadow-lg z-10 bg-opacity-50 backdrop-blur-lg'>
      <h1 className="text-2xl">This will clear all of your tasks. You sure?</h1>
      <button onClick={clearTasks} className="bg-red-600 w-20 h-12 rounded-md duration-200 hover:bg-red-800 hover:text-white">Yes</button>
      <button onClick={closeModal} className="hover:text-gray-400">No</button>
    </div>
  )
}

export default Modal;