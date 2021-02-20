import { Field } from 'formik'
import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Text } from '.'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    placeholder?: string
    error?: string
    msgError?: string
}

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin: 17px 0 0 0;

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
        border: 1px solid
            ${props =>
                props.error == true ? props.theme.colors.neutral : '#FF377F'};

        span {
            position: absolute;
            display: block;
            top: 5px;
            right: 0px;
            width: 16px;
            height: 16px;
            background:
                0 -690px;
            cursor: pointer;
        }

        input {
                padding-right: 16px;
                box-sizing: border-box;
            }
    }

    @media screen and (max-width: 600px) {
        text-align: start;
    }
`

const TextInput: React.FC<InputProps> = ({
    id,
    name,
    placeholder,
    msgError,
}) => {
    return (
        <Input error={msgError == null ? true : false}>
            <label htmlFor={id}>{name}</label>
            <Field id={id} name={id} placeholder={placeholder} type={id}  />
            <Text error> {msgError} </Text>
        </Input>
    )
}

export default TextInput
