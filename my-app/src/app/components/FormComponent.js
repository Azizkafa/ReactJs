"use client"

import React, { useState, useRef, isValidElement } from 'react'

function ControlledForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [selectedOption, setselectedOption] = useState("")

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [selectedOptionError, setselectedOptionError] = useState("")

    const handleNameChange = event => {
        setName(event.target.value)

        setNameError('')
    }
    const handleEmailChange = event => {
        setEmail(event.target.value)

        setEmailError('')
    }
    const handleSelectchange = event => {
        setselectedOption(event.target.value)

        setselectedOptionError('')
    }
    const handleSubmit = event => {
        event.preventDefault()/* mencegah untuk tidak mereload page atau pergi ke halaman lain */

        let IsValid = true
        if (!name) {
            setNameError('Name is required')
            IsValid = false
        }

        if (!email) {
            setEmailError('email is required')
            IsValid = false
        } else if (!/@(cgoogle\.com|yahoo\.com)$/.test(email))/* untuk mengecek domainnya harus yahoo.con atau google.com */ {
            setEmailError(`Invalid data format, use google.com atau yahooo.com`)
            IsValid = false
        }

        if (!selectedOption) {
            setselectedOptionError('Please select an option')
            IsValid = false
        }

        if (!IsValid) {
            return
        }


        console.log(`Form data :`, { name, email, selectedOption })

        setName("")/* pada saat ngesubmit, kita balikan statenya ke string kosong */
        setEmail("")/* pada saat ngesubmit, kita balikan statenya ke string kosong */
        setselectedOption("")/* pada saat ngesubmit, kita balikan statenya ke string kosong */

        setNameError("")/* pada saat ngesubmit, kita balikan statenya ke string kosong */
        setEmailError("")/* pada saat ngesubmit, kita balikan statenya ke string kosong */
        setselectedOptionError("")/* pada saat ngesubmit, kita balikan statenya ke string kosong */
    }
    return (
        <form onSubmit={handleSubmit} className='max-w-md mx-auto p-6 bg-white shadow-md rounded-md'>
            <h1 className='block text-xl text-blue-500 font-bold mb-2'>Controlled Form</h1>
            <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                <input type='text' id='name' value={name} onChange={handleNameChange} placeholder='Your Name...' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-amber-50'/>
                {nameError && <p className='text-red-500 text-xs italic'>{nameError}</p>}{/* conditional rendering */}
            </div>

            <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type='email' id='email' value={email} onChange={handleEmailChange} placeholder='Your Email Here...' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-amber-50'/>
                {emailError && <p className='text-red-500 text-xs italic'>{emailError}</p>}{/* conditional rendering */}
            </div>

            <div className='mb-4'>
                <label htmlFor='option' className='block text-gray-700 text-sm font-bold mb-2'>Select on Option:</label>
                <select id='options' value={selectedOption} onChange={handleSelectchange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-amber-50'>
                    <option value="">-- Select --</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                {selectedOptionError && <p className='text-red-500 text-xs italic'>{selectedOptionError}</p>}{/* conditional rendering */}
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focue:shadow-amber-50'>Submit</button>
        </form>
    )
}

function UnControlledForm() {
    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)

    const handleSubmit = event => {
        event.preventDefault()/* mencegah untuk tidak mereload page atau pergi ke halaman lain */

        const nameValue = nameInputRef.current.value
        const emailValue = emailInputRef.current.value
        console.log(`Form data dari (uncontrolled) :`, { name: nameValue, email: emailValue })

        nameInputRef.current.value = ''
        emailInputRef.current.value = ''

    }
    return (
        <form onSubmit={handleSubmit} className='max-w-md mx-auto p-6 bg-white shadow-md rounded-md'>
            <h1 className='block text-xl text-blue-500 font-bold mb-2'>UnControlled Form</h1>
            <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                <input type='text' id='name' ref={nameInputRef} placeholder='Your Name...' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-amber-50'></input>
            </div>

            <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type='email' id='email' ref={emailInputRef} placeholder='Your Email Here...' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-amber-50'></input>
            </div>


            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focue:shadow-amber-50'>Submit</button>
        </form>
    )
}

export { ControlledForm, UnControlledForm }