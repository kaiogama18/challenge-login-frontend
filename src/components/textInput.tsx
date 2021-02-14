import { Field } from 'formik'
import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Text } from '.'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    placeholder?: string
    msgError: string
}

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin: 17px 0;

    label {
        font-size: 10px;
        text-transform: uppercase;
        color: ${props => props.theme.colors.text};
    }

    input {
        margin: 8px 0;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 17px 0 17px 16px;
        border: 1px solid ${props => props.theme.colors.neutral && ' #FF377F'};
    }
`

const TextInput: React.FC<InputProps> = ({
    id,
    name,
    placeholder,
    msgError
}) => {
    return (
        <Input>
            <label htmlFor={id}>{name}</label>
            <Field id={id} name={id} placeholder={placeholder} type={id} />
            <Text size="10px" color="error" marginTop="6px" marginLeft="10px">
                {msgError}
            </Text>
        </Input>
    )
}

export default TextInput
