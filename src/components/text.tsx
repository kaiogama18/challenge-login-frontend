import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    color?: string
    size?: number
    weight?: number
}

const Paragraph = styled.div`
    color: ${props =>
        props.color == 'neutral'
            ? props.theme.colors.neutral
            : props.theme.colors.text};
    font-size: ${props => props.size}px;
    font-weight: ${props => props.weight};
`

const Text: React.FC<InputProps> = ({ size, weight, color, ...rest }) => {
    return <Paragraph size={size} weight={weight} color={color} {...rest} />
}

export default Text
