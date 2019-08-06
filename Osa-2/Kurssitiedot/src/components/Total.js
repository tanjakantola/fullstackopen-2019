import React from 'react'

const Total= ({ parts}) => {
	const total = parts.reduce((sum, value) => sum + value.exercises, 0)
	console.log("Total ",  total); 
	return <p>TOTAL {total} exercises</p>
}

export default Total