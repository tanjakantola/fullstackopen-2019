import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({ course }) => {
	return (
	<div>
		{course.parts.map(part => {
			return (
	  			<Part key={part.id} part={part}></Part>
			)
  		})}
      	<Total parts={course.parts}></Total>
	</div>
	)
} 
export default Content