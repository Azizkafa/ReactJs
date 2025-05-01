'use client'

import {useLocalStorage} from '@/app/components/HooksComponent'

function StorageLocal(){
    const [name, setName] = useLocalStorage('my-name'/* key */, 'guest'/* value */)

    return(
        <div>
            <p>Hello, {name}</p>
            <input type='text' value={name} onChange={event => setName(event.target.value)} placeholder='Masukkan nama anda'></input>
        </div>
    )
}

export {StorageLocal}