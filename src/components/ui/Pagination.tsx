import React, { MouseEventHandler } from 'react'


interface Pages {
    link: string;
    pageNumber: string;
    handleClick: MouseEventHandler
}

const Pagination: React.FC<Pages> = ({link, pageNumber, handleClick}) => {
  return (
    <a href={link} className='py-2 px-4 bg-slate-300 rounded hover:bg-gray-400 hover:transition-all duration-300' onClick={handleClick}>
        <span className='text-lg font-medium'>{pageNumber}</span>
    </a>
  )
}

export default Pagination
