import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html,
    body {
    background: ${props => props.theme.colors.background};
    padding: 0;
    margin: 0;

    font: 400 16px Montserrat, sans-serif;
}

    * {
        box-sizing: border-box;
    }
`


