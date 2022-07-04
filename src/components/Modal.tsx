import React from 'react';

interface IProps {
  clearTodos: (e: any) => void;
  closeModal: () => void;
  viewModal: boolean;
  setViewModal: boolean;
}


const Modal: React.FC<IProps> = (clearTodos, closeModal) => {
  return (
    <div className='bg-white w-72 h-72 fixed top-1/2 mt-[-144px] left-1/2 ml-[-144px] rounded-3xl grid place-items-center p-6 shadow-2xl'>
      <h1 className="text-2xl">This will clear all of your tasks. You sure?</h1>
      <button className="bg-red-600 w-20 h-12 rounded-md duration-200 hover:bg-red-800 hover:text-white">Yes</button>
      <button onClick={closeModal} className="hover:text-gray-400">No</button>
    </div>
  )
}

export default Modal;