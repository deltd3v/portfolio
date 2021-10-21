import './s.scss'

const Hero = () => {
	return (
		<div className={'Hero'}>
			<div className='left'>
				<article className='left-wrapper'>
					<h1 className='title'>
						Hello World !! My name is <br />
					</h1>
					<h4 className='title-name'>Evans Chaba</h4>
					<div className='job-titles'>
						<div className='job-titles-wrapper'>
							{/* <pre className='job-title-text'>UX Designer</pre> */}
							<pre className='job-title-text'>UI Designer</pre>
							<pre className='job-title-text'>Web Developer</pre>
						</div>
					</div>
				</article>
			</div>
			<div className='right'></div>
		</div>
	)
}

export default Hero
