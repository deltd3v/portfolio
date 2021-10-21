import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Hero from './components/Hero'
import './index.scss'

const App = () => {
	const jsx = (
		<StrictMode>
			<div className={'App'}>
				<h1>Hello World!</h1>
				<Hero></Hero>
			</div>
		</StrictMode>
	)

	return jsx
}

ReactDOM.render(<App />, document.getElementById('root'))
