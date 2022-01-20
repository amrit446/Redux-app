import React from 'react'

function Profile(pro) {
    return (
        <div>
            <h1>{pro.text.name}</h1>
            <h1>{pro.data}</h1>
        </div>
    )
}

export default Profile
