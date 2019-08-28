import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.value}> {props.text} </button>
    )
}

const Statistics = (props) => {
    return (
        <p>{props.text} {props.value} </p>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [follow, setFollow] = useState(0)
    const [positive, setPositive] = useState(0)

    if (all < 1) {
        return (
            <div>

                <h1>Give feedback</h1>

                <Button text="good" value={() => setGood(good + 1) + setAll(all + 1) + setFollow(follow + 1) + setAverage(follow / all) + setPositive(good / all)} />

                <Button text="neutral" value={() => setNeutral(neutral + 1) + setAll(all + 1) + setPositive(good / all) + setAverage(follow / all)} />

                <Button text="bad" value={() => setBad(bad + 1) + setAll(all + 1) + setFollow(follow - 1) + setAverage(follow / all)
                    + setPositive(good / all)} />

                <h1>Statistics</h1>

                <p>No feedback is given</p>

            </div>
        )
    }

    return (
        <div>
            <h1>Give feedback</h1>

            <Button text="good" value={() => setGood(good + 1) + setAll(all + 1) + setFollow(follow + 1) + setAverage(follow / all) + setPositive(good / all)} />

            <Button text="neutral" value={() => setNeutral(neutral + 1) + setAll(all + 1) + setPositive(good / all) + setAverage(follow / all)} />

            <Button text="bad" value={() => setBad(bad + 1) + setAll(all + 1) + setFollow(follow - 1) + setAverage(follow / all)
                + setPositive(good / all)} />

            <h1>Statistics</h1>

            <Statistics text="good" value={good} />
            <Statistics text="neutral" value={neutral} />
            <Statistics text="bad" value={bad} />
            <Statistics text="all" value={all} />
            <Statistics text="average" value={average} />
            <Statistics text="positive" value={positive} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)