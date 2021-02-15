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

    @media screen and (max-width: 600px) {
        width: 100%;
        position: fixed;
        align-items: center;
        justify-content: center;
    }
`
export const Space = styled.div`
    height: ${({ height }) => height};
    position: inherit;
`

export const ContentForm = styled.div`
    width: 257px;
    height: 518px;
    display: flex;
    margin-left: 20%;
    flex-direction: column;
    justify-content: center;

    .sucess {
        font-size: 10px;
        color: white;
        margin-top : 6px
        margin-left: 10px
    }

    @media screen and (max-width: 600px) {
        padding: 10% 10% 7% 10%;
        width: 80vw;
        height: auto;
        margin-left: 0;
        border-radius: 8px;
        text-align: center;
        margin-bottom: 15%;
        background: ${props => props.theme.colors.background};
    }
`
