import React from 'react'
import { useSelector } from 'react-redux'

const LastName = () => {

    const name = useSelector((state) => state.usersss.lastName)
    
    return <div className='font-bold'>{name}</div>
}

export default LastName
