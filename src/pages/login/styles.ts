import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContentForm = styled.div`
    margin-top: 16px;
`

export const Item = styled.div`
    align-self: center;
    flex: ${({ flex }) => flex};
`
