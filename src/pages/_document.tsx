import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const titles = 'Login'
const siteTitle = 'Teste Wiser'
const description = 'Sondagem técnica e criativa'

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }
    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content={description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={titles} />
                    <meta property="og:description" content={description} />
                    <meta property="og:site_name" content={siteTitle} />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.ico" />
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
