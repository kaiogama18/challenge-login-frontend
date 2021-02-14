import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '../store'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Component {...pageProps} />
                <GlobalStyle />
            </Provider>
        </ThemeProvider>
    )
}

export default App
