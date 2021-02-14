import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    size?: string
    align?: string
    color?: string
    width?: string
    weight?: number
    marginTop?: string
    marginLeft?: string
    marginBottom?: string
}
const Paragraph = styled.div`
    width: ${props => props.width};
    font-size: ${props => props.size};
    color: ${props =>
        props.color == 'error'
            ? props.theme.colors.error
            : props.color == 'neutral'
            ? props.theme.colors.neutral
            : props.theme.colors.text};
    text-align: ${props => props.align};
    font-weight: ${props => props.weight};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-bottom: ${props => props.marginBottom};

`

const Text: React.FC<InputProps> = ({
    size,
    color,
    align,
    width,
    weight,
    marginTop,
    marginLeft,
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
            marginLeft={marginLeft}
            marginBottom={marginBottom}
            {...rest}
        />
    )
}

export default Text
