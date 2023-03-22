import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
	NProgress.configure({ showSpinner: false })

	Router.events.on('routeChangeStart', () => {
		NProgress.start()
	})

	Router.events.on('routeChangeComplete', () => {
		NProgress.done()
	})

	return (
		<>
			<Head></Head>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	)
}
