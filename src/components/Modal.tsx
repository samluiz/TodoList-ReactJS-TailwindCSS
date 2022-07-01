import React from 'react';


const Modal: React.FC = () => {
  return (
    <div className='bg-white bg-opacity-70 w-96 h-96 rounded-3xl justify-self-center self-center absolute grid place-items-center p-6'>
      <h1 className="text-4xl">You reached the maximum number of tasks. (work in progress, please refresh the page)</h1>
    </div>
  )
}

export default Modal;