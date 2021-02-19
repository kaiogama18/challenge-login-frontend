import styled from 'styled-components'
interface InputProps {
    title?: true
    subTitle?: true
    label?: true
    error?: true

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

const Title = styled.h1`
    margin: 0;
    font-size: 40px;
    font-weight: 400;
    color: ${props => props.theme.colors.text};
    @media screen and (max-width: 600px) {
        font-size: 34px;
    }
`

const SubTitle = styled.h2`
    width: 90%;
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.colors.neutral};
    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`

const Label = styled.p`
    margin: 0;
    width: 212px;
    font-size: 14px;
    color: ${props => props.theme.colors.neutral};
    @media screen and (max-width: 600px) {
        font-size: 12px;
        color: white;
        a {
            color: white;
        }
    }
`
const Error = styled.p`
    font-size: 10px;
    margin: 10px 0 0 6px;
    color: ${props => props.theme.colors.error};
`

const Paragraph = styled.div`
    width: ${props => props.width};
    text-align: ${props => props.align};
    font-weight: ${props => props.weight};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-bottom: ${props => props.marginBottom};

    @media screen and (max-width: 600px) {
        margin-left: 0;
    }
`

const Text: React.FC<InputProps> = ({
    title,
    subTitle,
    label,
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
    ...rest
}) => {
    return (
        <Paragraph marginLeft={marginLeft} marginTop={marginTop} align={align}>
            {title ? (
                <Title {...rest} />
            ) : subTitle ? (
                <SubTitle {...rest} />
            ) : label ? (
                <Label {...rest} />
            ) : (
                <Error {...rest} />
            )}
        </Paragraph>
    )
}

export default Text
