// import s from './Btn.module.scss'
import Btn from '../components/Btn'

export const Index = () => {
	return (
		<>
			<h1>index</h1>

			<label htmlFor="">default</label>
			<br />
			<Btn label="click"></Btn>
			<br />
			<br />

			<label htmlFor="">d:outlined a:filled h:outliend</label>
			<br />

			<Btn label="click" outlined activeFill hoverOutline></Btn>
			<br />
			<br />
		</>
	)
}

export default Index
