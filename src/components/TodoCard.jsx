import React from 'react'

export default function TodoCard() {
  return (
    <li className='todoItem'>
        <div className="actionContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
        </div>
    </li>
  )
}
