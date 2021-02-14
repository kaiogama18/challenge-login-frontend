import { InputHTMLAttributes } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Button: React.FC<InputProps> = ({ type, ...rest }) => {
    return <button type="submit" {...rest} />
}

export default Button
