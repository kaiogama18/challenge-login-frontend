import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`
export const Content = styled.div`
    display: flex;
    height: 100vh;
    align-items: start;
    flex-direction: column;
    justify-content: center;
`

export const ContentForm = styled.div`
    width: 257px;
    height: 518px;
    display: flex;
    margin-left: 20%;
    flex-direction: column;
`

export const Item = styled.div`
    // align-self: center;
    flex: ${({ flex }) => flex};
`
