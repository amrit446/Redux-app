import React from 'react'

function User(prop) {
    console.warn(prop.data.name)
    const {data}=prop
    return (
        <div>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
        </div>
    )
}

export default User
