import React from 'react'

const Total= ({ parts}) => {
	const total = parts.reduce((sum, value) => sum + value.exercises, 0)
	console.log("Yhteensä",  total); 
	return <p>YHT: {total} tehtävää</p>
}

export default Total