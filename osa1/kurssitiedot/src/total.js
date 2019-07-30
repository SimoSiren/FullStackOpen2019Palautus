import React from 'react'

const Total = (props) => {

    const { parts } = props

    const osa1 = parts[0].exercises
    const osa2 = parts[1].exercises
    const osa3 = parts[2].exercises

    return (
        <>
            <p>Number of exercises: {osa1 + osa2 + osa3} </p>
        </>
    )
}
export default Total