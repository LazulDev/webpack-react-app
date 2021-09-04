// import React from 'react' // Desaconsejado, lo suprimimos porque babel está configurar como runtime: 'automatic'
import { useState } from 'react'
const App = () => {
	const [counter, setCounter] = useState(0)
	const [values, setValues] = useState()

	const handleClick = () => {
		setCounter(counter + 1)
		setValues(values.concat(counter))
	};
	return (
		<div className="container">
			<h1>Hello Lazul!</h1>

			<button onClick={ handleClick }>
				Press this!
			</button>
			<div>
				<strong>
					{counter}
				</strong>
			</div>
		</div>
)}

export default App