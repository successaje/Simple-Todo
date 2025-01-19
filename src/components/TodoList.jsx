import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos = [
        "Code today",
        "Code yesterday",
        "code again tomorrow",
        "Just adding this",
        "And this as well"
    ]

  return (
    <ul className='main'>
      {/* Mapping out content */}
      {todos.map((todo, index)=> {
        return (
            // parent elements should contain a unique key

            <TodoCard key={index}> 

            </TodoCard>  
        )
      })}
    </ul>
  )
}
