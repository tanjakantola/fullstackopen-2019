import React from 'react'
import ReactDOM from 'react-dom'

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
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


  const Header = (props) => {
    return <h1>{props.course.name}</h1>
  }

  const Part = (props) => {
	return (
		<p>
        	{props.part.name} - {props.part.exercises} exercises
	    </p>
	)
}

const Content = (props) => {
	return (
		<>
		<Part part={props.parts[0]} />
		<Part part={props.parts[1]} />
		<Part part={props.parts[2]} />
		</>
	)
}

const Total = (props) => {
	return (
		<p><b>TOTAL:</b> {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</p>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))