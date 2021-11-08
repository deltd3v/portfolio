import s from './Btn.module.scss'

export type BtnProps = {
	label: string
	outlined?: boolean
	activeFill?: boolean
	activeOutline?: boolean
	hoverFill?: boolean
	hoverOutline?: boolean
}

export const Btn = ({
	label,
	outlined,
	activeFill,
	activeOutline,
	hoverFill,
	hoverOutline,
}: BtnProps) => {
	return (
		<button
			className={`
	${s.btn}
	${outlined && s.btnOutlined}
	${activeFill && s.activeFill}
	${hoverFill && s.hoverFill}
	${hoverOutline && s.hoverOutline}
	${activeOutline && s.activeOutline}`}
		>
			{label}
		</button>
	)
}

export default Btn
