import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    align?: string
    color?: string
    size?: number
    width?: number
    weight?: number
    marginTop?: number
    marginBottom?: number
}

const Paragraph = styled.div`
    width: ${props => props.width}px;
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
    color,
    align,
    width,
    weight,
    marginTop,
    marginBottom,

    ...rest
}) => {
    return (
        <Paragraph
            size={size}
            align={align}
            width={width}
            color={color}
            weight={weight}
            marginTop={marginTop}
            marginBottom={marginBottom}
            {...rest}
        />
    )
}

export default Text
