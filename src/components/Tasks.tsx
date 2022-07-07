import React from 'react';
import Delete from '../img/delete.svg'
import ReactTooltip from 'react-tooltip'

interface IProps {
  clearTask: (e: any, id: number, key: number) => void;
  allTodos: string[];
  id: number;
  count: number;
}

const Tasks: React.FC<IProps> = ({allTodos, count, clearTask, id}) => {
  return (
    <ul className=" h-fit flex flex-wrap justify-center gap-6">
          {allTodos.map((e: any, key: number) => {
            return (
              <div data-tip="You can edit my title and my task. Try it!" data-for="edit"  key={key} className=" bg-indigo-300 bg-opacity-10 w-72 flex justify-start items-left flex-col break-words rounded-md shadow-lg hover:transform-cpu px-4 py-1 mt-2 duration-200 hover:scale-105 hover:bg-opacity-40 backdrop-blur-sm m-4">
                <ReactTooltip className=' absolute' id='edit' type="info" effect="solid" />
                <h4 contentEditable className="text-[#FF52B4] text-lg 
                font-bold w-fit">Task {count += 1}</h4>
                <li contentEditable id='id' className="text-white antialiased w-56">{e}</li>
                <div className='grid justify-end gap-2'>
                  <button onClick={() => clearTask(e, id, key)}><img src={Delete} alt="Delete" className='w-6 h-6 absolute bottom-0 right-0 m-1' /></button>
                </div>
                
              </div>
            );
          })}
          
        </ul>
  )
}

export default Tasks;