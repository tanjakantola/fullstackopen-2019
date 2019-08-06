import React from 'react'

const Header = ({ course }) => {
    console.log("Kurssin nimi",  course.name );
	return (
		<h2>{course.name}</h2>
	)
}

export default Header