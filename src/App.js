import React from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'
import { useSelector } from 'react-redux'

function App() {
    const todos = useSelector((state) => state.todosss.todos)
    return (
        <div className='min-h-screen h-full w-screen bg-indigo-400'>
            <div className='container mx-auto px-4'>
                <header className='flex gap-20 '>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>изменение состояния</h1>
                        <User />
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>тудушка</h1>
                        <Form />
                        {todos?.map((todo) => (<TodoItem key={todo.id} todo={todo} />))}
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>асинхронный запрос к бд</h1>
                        <Posts />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default App
