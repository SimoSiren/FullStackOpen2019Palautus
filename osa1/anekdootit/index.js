import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.value}> {props.text} </button>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

    const voteAnekdote = () => {
        const newPoints = [...points]
        newPoints[selected] = points[selected] + 1
        setPoints(newPoints)
    }

    console.log(points, selected)

    return (
        <div >
            <div>
                {props.anecdotes[selected]}
            </div>
            <div>
                <p>This anekdote has got {points[selected]} votes.</p>
            </div>

            <div style={{ textAlign: 'left' }}>
                <Button text="Vote" value={() => voteAnekdote()}
                />
            </div>
            <div style={{ textAlign: 'left' }}>
                <Button text="Next anecdote" value={() => setSelected(Math.floor(Math.random() * 4))} />
            </div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
