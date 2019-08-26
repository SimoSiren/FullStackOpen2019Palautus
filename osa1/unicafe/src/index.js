import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    return (
        <div>
            <h1>Statistics</h1>
            <br />
            <p>Good {props.good} </p>
            <p>Neutral {props.neutral}</p>
            <p>Bad {props.bad}</p>
            <p>All {props.all}</p>
            <p>Average {props.average}</p>
            <p>Positive {props.positive} %</p>
        </div>
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

    return (
        <div>
            <h1>Give feedback</h1>
            <br />

            <button onClick={() => setGood(good + 1) + setAll(all + 1) + setFollow(follow + 1) + setAverage(follow / all) + setPositive(good / all)}>
                Good
                </button>

            <button onClick={() => setNeutral(neutral + 1) + setAll(all + 1) + setPositive(good / all) + setAverage(follow / all)}>
                Neutral
                </button>

            <button onClick={() => setBad(bad + 1) + setAll(all + 1) + setFollow(follow - 1) + setAverage(follow / all)
                + setPositive(good / all)}>
                Bad
                </button>
            <br />
            <Statistics good={good} neutral={neutral} bad={bad}
                all={all} average={average} positive={positive} />
        </div>
    )

}

ReactDOM.render(<App />,
    document.getElementById('root')
)