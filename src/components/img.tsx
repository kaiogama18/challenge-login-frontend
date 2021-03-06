import Image from 'next/image'
import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    src: string
    alt?: string
}

const DivImg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    flex: 1;

    img {
        height: 100vh;
        max-width: 100%;
        object-fit: cover;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-block;

        background: linear-gradient(
            180deg,
            #130525 0%,
            rgba(105, 57, 153, 0) 100%
        );
        transform: rotate(-180deg);
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 100%;
    }
`

const Img: React.FC<InputProps> = ({ src, alt }) => {
    return (
        <DivImg>
            <Image src={src} alt={alt} width="900" height="100" />
        </DivImg>
    )
}

export default Img
