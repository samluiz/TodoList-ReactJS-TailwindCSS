import React from 'react';
import Edit from '../img/edit.svg'
import Delete from '../img/delete.svg'

interface IProps {
  allTodos: string[];
  count: number;
  editTask: (e: any) => void;
}

const Tasks: React.FC<IProps> = ({allTodos, count, editTask}) => {
  return (
    <ul className=" h-fit flex flex-wrap justify-center gap-6">
          {allTodos.map((e: any, key: number) => {
            return (
              <div key={key} className=" bg-indigo-300 bg-opacity-10 w-56 flex justify-start items-left flex-col break-words rounded-md shadow-lg hover:transform-cpu px-4 py-1 mt-2 duration-200 hover:scale-105 hover:bg-opacity-40 overflow-hidden backdrop-blur-sm">
                <h4 className="text-[#FF52B4] text-lg font-bold w-fit">Task {count += 1}</h4>
                <li className="text-white antialiased w-fit">{e}</li>
                <div className='grid justify-end gap-2'>
                  <button onClick={() => editTask(e)}><img src={Edit} alt="Edit" className='w-6 h-6 absolute top-0 right-0 m-1' /></button>
                  <button><img src={Delete} alt="Delete" className='w-6 h-6 absolute bottom-0 right-0 m-1' /></button>
                </div>
                
              </div>
            );
          })}
          
        </ul>
  )
}

export default Tasks;