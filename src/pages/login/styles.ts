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
    flex: 1;

    @media screen and (max-width: 992px) {
        flex: 2;
    }
`

export const ContentForm = styled.div`
    width: 257px;
    height: 518px;
    display: flex;
    margin-left: 20%;
    flex-direction: column;
`


