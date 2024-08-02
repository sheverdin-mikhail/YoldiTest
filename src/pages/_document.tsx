import type { DocumentInitialProps } from 'next/document'
import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document<DocumentInitialProps> {
	constructor(props: any) {
		super(props)
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="Cache-control" content="no-cache, no-store, must-revalidate" />
					<meta name="theme-color" content="#000000" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="use-credentials"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
