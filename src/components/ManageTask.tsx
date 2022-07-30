import React from 'react';

interface IProps {
  handleClick: (e: any) => void;
  clearTodos: (e: any) => void;
  handleChange: (e: any) => void;
  disableButton: () => boolean;
  allTodos: string[];
  todo: string;
  maxLength: number;
}

const ManageTask: React.FC<IProps> = ({ handleClick, clearTodos, handleChange, todo, allTodos, disableButton}) => {
  return (
    <form className="flex flex-col gap-8">
      <textarea required value={todo} maxLength={200} placeholder='Type something to do...' onChange={handleChange} className=" required:bg-white required:opacity-70 resize-none p-2 rounded placeholder-cyan-800 duration-200 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] focus:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] active:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]" />
      <div className="flex gap-4">
        <button onClick={handleClick} className={`bg-white h-12 w-24 rounded duration-150 hover:bg-gray-400 focus:ring focus:ring-stone-900 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] select-none`} >Add Task</button>
        <button disabled={allTodos.length < 1} onClick={clearTodos} className={`bg-white h-12 w-24 rounded duration-150 hover:bg-red-800 focus:ring focus:ring-stone-900 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ${disableButton() ? 'opacity-30' : null} select-none`}>Clear Tasks</button>
      </div>
    </form>

  )
}

export default ManageTask;