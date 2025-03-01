import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
	const [password, setPassword] = useState('');
	const [length, setLength] = useState(8);
	const [numbersAllowed, setNumbersAllowed] = useState(false);
	const [charAllowed, setCharallowed] = useState('');

	const passwordRef = useRef(null);

	const genPass = useCallback(() => {
		let pass = ''
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

		if (numbersAllowed) str += '0123456789'
		if (charAllowed) str += '!@#$%&*'

		for (let i = 0; i < length; i++) {
			let char = Math.floor(Math.random() * str.length + 1)
			pass += str.charAt(char)
		}
		setPassword(pass)
	}, [length, numbersAllowed, charAllowed])

	const copyPassword = () => {
		window.navigator.clipboard.writeText(password)
		passwordRef.current.select()
	}

	useEffect(() => {
		genPass()
	}, [length, numbersAllowed, charAllowed, genPass])

	return (
		<>
			<div>
				<h1>Password Generator</h1>
				<div>
					<input
						type="text"
						value={password}
						placeholder='Password'
						readOnly
						id='password'
						ref={passwordRef}
					/>
					<button
						onClick={copyPassword}>Copy</button>
				</div>
			</div>
			<div>
				<div>
					<input
						type="range"
						id="length"
						min={8}
						max={50}
						value={length}
						onChange={(e) => setLength(e.target.value)}
					/>
					<label htmlFor="length">Length: {length}</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="numbers"
						defaultChecked={numbersAllowed}
						onChange={() => {
							setNumbersAllowed((prev) => !prev)
						}}
					/>
					<label htmlFor="numbers">Numbers</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="charecters"
						defaultChecked={charAllowed}
						onChange={() => {
							setCharallowed((prev) => !prev)
						}}
					/>
					<label htmlFor="charecters">Charecters</label>
				</div>
			</div>
		</>
	);
}

export default App;

