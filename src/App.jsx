import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import Todoform from './components/Todoform'
import Todoitems from './components/Todoitems'

function App() {
 const [todos,setTodos] = useState([])

 const addtodo = (todo) =>{
  setTodos((prev)=>[...prev,{id: Date.now(),...todo}])
 }

 const updatetodo = (id,todo)=>{
  setTodos((prev)=> prev.map((prevtodo)=>(prevtodo.id === id ? todo : prevtodo)))
 }
 const deletetodo = (id)=>{
  setTodos((prev)=> prev.filter((prevtodo)=> prevtodo.id !== id) )
 }

 const togglecomplete = (id) =>{
  setTodos((prev)=> prev.map((prevtodo)=> prevtodo === id ? {...prevtodo , completed: !prevtodo.completed} : prevtodo))
 }
 useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem('todos'))

      if(todos && todos.length > 0){
        setTodos(todos)
      }
 },[])

 useEffect(()=>{
     localStorage.setItem('todos', JSON.stringify(todos))
 },[todos])

  return (
    <TodoProvider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <Todoform/>
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                          <Todoitems todo={todo}/>
                        </div>
                      ))}
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
