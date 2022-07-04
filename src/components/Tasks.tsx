import React from 'react';

interface IProps {
  allTodos: string[];
  count: number;
}

const Tasks: React.FC<IProps> = ({allTodos, count}) => {
  return (
    <ul className=" h-screen absolute right-28">
          {allTodos.map((e: any, key: number) => {
            return (
              <div key={key} className=" bg-indigo-300 bg-opacity-10 max-w-72 flex justify-start items-left flex-col break-words rounded-md shadow-lg hover:transform-cpu px-4 py-1 mt-2 duration-200 hover:scale-105 hover:bg-opacity-40 overflow-hidden">
                <h4 className="text-[#FF52B4] text-lg font-bold border-b-2">Task {count += 1}</h4>
                <li className="text-white antialiased">{e}</li>
              </div>
            );
          })}
        </ul>
  )
}

export default Tasks;