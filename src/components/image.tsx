import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    src: string
    alt?: string
}

const Image: React.FC<InputProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} />
}

export default Image
