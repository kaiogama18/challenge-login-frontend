import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    align?: string
    color?: string
    size?: number
    weight?: number
    marginTop?: number
    marginBottom?: number
}

const Paragraph = styled.div`
    color: ${props =>
        props.color == 'neutral'
            ? props.theme.colors.neutral
            : props.theme.colors.text};
    font-size: ${props => props.size}px;
    font-weight: ${props => props.weight};
    margin-top: ${props => props.marginTop}px;
    margin-bottom: ${props => props.marginBottom}px;
    text-align: ${props => props.align};
`

const Text: React.FC<InputProps> = ({
    size,
    weight,
    color,
    marginTop,
    marginBottom,
    align,
    ...rest
}) => {
    return (
        <Paragraph
            size={size}
            weight={weight}
            color={color}
            marginTop={marginTop}
            marginBottom={marginBottom}
            align={align}
            {...rest}
        />
    )
}

export default Text
