import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../img/ScrollDown.json'

interface IProps {
  allTodos: string[];
}

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const ScrollAnimationDesktop: React.FC<IProps> = ( {allTodos} ) => {

  

  return <div className={` pointer-events-none select-none duration-500 ${allTodos.length > 0 ? 'opacity-100' : ' opacity-0 '}`}><Lottie options={defaultOptions}
  height={100}
  width={100}
  /> <span>Scroll down to see your tasks</span></div>
}



export default ScrollAnimationDesktop;