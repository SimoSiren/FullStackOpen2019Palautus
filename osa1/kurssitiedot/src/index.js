import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Header from './header'
import Content from './content'
import Total from './total'


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }



    return (
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <div className="total">
                <Total parts={course.parts} />
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
