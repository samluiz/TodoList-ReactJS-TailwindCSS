import React from 'react';
import Delete from '../img/delete.svg'
import ReactTooltip from 'react-tooltip';

interface IProps {
  allTodos: string[];
  count: number;
}

const Tasks: React.FC<IProps> = ({allTodos, count}) => {
  return (
    <ul className=" h-fit flex flex-wrap justify-center gap-6">
          {allTodos.map((e: any, key: number) => {
            return (

                <div data-tip="You can edit my title and my content!" key={key} className=" bg-indigo-300 bg-opacity-10 w-72 flex justify-start items-left flex-col break-words rounded-md shadow-lg hover:transform-cpu px-4 py-1 mt-2 duration-200 hover:scale-105 hover:bg-opacity-40 backdrop-blur-sm m-4">
                  <ReactTooltip isCapture={true}  />
                <h4 contentEditable className="text-[#a828a8] text-lg 
                font-bold w-fit">Task {count += 1}</h4>
                <li contentEditable className="text-white antialiased w-56">{e}</li>           
              </div>

              
            );
          })}
          
        </ul>
  )
}

export default Tasks;