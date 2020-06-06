import React from 'react'

const UserOutput = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
            <h2>{props.text}</h2>

        </div>
    )
}

export default UserOutput
