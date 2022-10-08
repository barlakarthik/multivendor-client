import React, { useState, useEffect } from 'react'

const CrudApp = () => {
    const [name, setName] = useState('')
    const [names, setNames] = useState([])
    const [editing, setEditing] = useState(false)
    const [currentName, setCurrentName] = useState('')
    useEffect(() => {
        const temp = localStorage.getItem('names')
        const load = JSON.parse(temp)
        if (load) {
            setNames(load)
        }
    }, [])
    useEffect(() => {
        const temp = JSON.stringify(names)
        localStorage.setItem('names', temp)
    }, [names])

    const Submit = (e) => {
        e.preventDefault();
        const obj = {
            id: new Date().getTime(),
            name: name,
            isCompleted: true
        }
        setNames([...names].concat(obj))
        setName('')
    }
    const Delete = (id) => {
        setNames([...names].filter(i => i.id !== id))
    }
    const Toggle = (id) => {
        setNames([...names].map((i) => {
            if (i.id === id) {
                i.isCompleted = !i.isCompleted
            }
            return i
        }))
    }
    const Edit = (id) => {
        setNames([...names].map((i) => {
            if (i.id === id) {
                i.name = currentName
            }
            return i
        }))
        setEditing(false)
        setCurrentName('')
    }
    return (
        <div>
            <form onSubmit={Submit}>
                <input placeholder='enter name...' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            {names.map(i => <div key={i.id}>
                {editing === i.id ? (<input value={currentName} onChange={(e) => setCurrentName(e.target.value)} />) : (<div>{i.name}</div>)}
                <button onClick={() => Delete(i.id)}>delete</button>
                <input type='checkbox' onChange={() => Toggle(i.id)} />
                {editing === i.id ? (<button onClick={() => Edit(i.id)}>Submit-dit</button>) : (<button onClick={() => setEditing(i.id)}>Edit</button>)}
            </div>)}
        </div>
    )
}

export default CrudApp