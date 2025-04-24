'use client'
import clsx from 'clsx'
import React, { useState } from 'react'

const ConditionalListExample = () => {
    const [isLoggedIn, setisLoggeidIn] = useState(false)

    const toogleLogin = () => {
        setisLoggeidIn(!isLoggedIn)/* jika kondisinya bernilai true, maka state nya akan bernilai true terus dan tidak berubah */
    }
    const data = [
        {id : 1, name: "John Doe", age : 25, isImportant : true},
        {id : 2, name: "John Doe", age : 26, isImportant : false},
        {id : 3, name: "John Doe", age : 27, isImportant : false},
        {id : 4, name: "John Doe", age : 28, isImportant : true},
    ]
    const [items, setItems] = useState(data)
    const addItem  = () => {
        const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) +1 : 1
        const newItem = {id: newId, name: `item ${newId}`, age: null, isImportant : false}

        setItems([...items, newItem])
    }

    const removeItem = id => setItems(items.filter(item => item.id !== id)) 
    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Conditional Rendering & List</h1>

            <button
                className={clsx(
                    isLoggedIn ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700',
                    'text-white font-bold py-2 px-4 rounded mb-4'
                )}
                onClick={toogleLogin}
            >
                {isLoggedIn ? 'logout' : 'login'}
            </button>
            {/* If-else exmaple */}
            <h2 className='text-xl font-semibold mb-2'>If else</h2>
            {(() => {
                if (isLoggedIn) {
                    return <div className='p-2 bg-green-100 border-green-400 rounded'>Welcome, User </div>
                } else {
                    return <div className='p-2 bg-red-100 border-red-400 rounded'>Plis, Login </div>
                }
            })()}{/* menggunakan if else di dalam return menggunakan immediate invoke function dengan penambahan () di akhir*/}
            {/* Logical AND (&&) example */}
            <h2 className='text-xl font-semibold mt-4 mb-2'>2. Logical AND (&&)</h2>
            {isLoggedIn && (
                <div className='p-2 bg-blue-100 border border-blue-400 rounded'>
                    Kamu sedang login, sehingga kamu bisa melihat konten ini
                </div>
            )}
            {/* List Example */}
            <h2 className='text-xl font-semibold mt-6 mb-2'>3. List Rendering with Key</h2>
            <button onClick={addItem} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Add Item</button>
            <ul>
                {items.map(item =>(
                    <li key={item.id}className='p-2 border-b bg-gray-200 flex items-center justify-between'>
                        <span>{item.name}</span>
                        {item.isImportant && <span className='text-red-500 ml-2'>(important Person!)</span>}
                        <button onClick={() => {removeItem(item.id)}} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'>Remove</button>
                    </li>
                ))}
            </ul>
            {items.length === 0 && <div className='text-gray-500'>No items in the list</div>}
        </div>
    )
}

export default ConditionalListExample