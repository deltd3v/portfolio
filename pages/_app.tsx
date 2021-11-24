import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export default (({ Component, pageProps }) => {
	return <Component {...pageProps} />
}) as React.FC<AppProps>
