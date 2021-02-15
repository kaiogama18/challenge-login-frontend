import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    align?: string
    color?: string
    width?: string
    weight?: number
    fontSize?: string
    marginTop?: string
    fontMobile?: string
    marginLeft?: string
    colorMobile?: string
    marginBottom?: string
}

interface Error {
    alert?: boolean
}

type Props = InputProps & Error

const Paragraph = styled.div`
    width: ${props => props.width};
    font-size: ${props => props.fontSize};

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

    @media screen and (max-width: 600px) {
        margin-left: 0;
        ${props =>
            props.colorMobile == 'white'
                ? 'color: white; a { color: white }'
                : null}
        font-size: ${props => props.fontMobile};
    }
`

const Text: React.FC<Props> = ({
    fontSize,
    color,
    align,
    width,
    weight,
    marginTop,
    fontMobile,
    marginLeft,
    marginBottom,
    colorMobile,
    alert,
    ...rest
}) => {
    return (
        <Paragraph
            align={align}
            width={width}
            color={color}
            weight={weight}
            fontSize={fontSize}
            marginTop={marginTop}
            fontMobile={fontMobile}
            marginLeft={marginLeft}
            marginBottom={marginBottom}
            colorMobile={colorMobile}
            {...rest}
        >
        </Paragraph>
    )
}

export default Text
