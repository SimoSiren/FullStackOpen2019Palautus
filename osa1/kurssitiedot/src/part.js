import React from 'react'

const Part = (props) => {
    //restrukturointia
    const { name, exercises } = props.part

    return (
        <>
            <p>
                {name} {exercises}
            </p>
        </>
    )
}

export default Part