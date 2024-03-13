import { useContext , createContext } from "react";


export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: 'todo msg',
            completed: false
        }
    ],
    addtodo: (todo) => {},
    updatetodo: (id,todo ) => {},
    deletetodo: (id) => {},
    togglecomplete: (id) => {},
})



export const useTodo= () =>{
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider