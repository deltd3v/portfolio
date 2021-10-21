import './s.scss'

const Hero = () => {
	return (
		<div className={'Hero'}>
			<div className='left'>
				<article className='left-wrapper'>
					<pre className='title'>
					 name: <br />
					</pre>
                    <h4 className='title-name'>Evans Chaba</h4>
					<pre className='title'>
					 title: <br />
					</pre>
					<div className='job-titles'>
						<div className='job-titles-wrapper'>
							{/* <pre className='job-title-text'>UX Designer</pre> */}
							<pre className='job-title-text'>UI Designer</pre>
							<pre className='job-title-text'>Web Developer</pre>
							<pre className='job-title-text'>🐛 Bug Squasher 😎</pre>
						</div>
					</div>
				</article>
			</div>
			<div className='right'></div>
		</div>
	)
}

export default Hero
