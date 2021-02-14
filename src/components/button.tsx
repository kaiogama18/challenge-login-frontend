import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Btn = styled.button`
    width: 256px;
    height: 48px;
    margin-top: 16px;
    border-radius: 8px;
    border-color: transparent;
    text-transform: uppercase;
    box-shadow: 0px 10px 25px #cf99db;
    box-shadow: rgba(207, 153, 219, 1);
    color: white;
    background: linear-gradient(
        267.79deg,
        ${props => props.theme.colors.btnPrimary} 0%,
        ${props => props.theme.colors.btnSecondary} 99.18%
    );
`

const Button: React.FC<InputProps> = ({ type, ...rest }) => {
    return <Btn type="submit" {...rest} />
}

export default Button
