import Text from '../../components/text'
import { Container, Content, Form } from './styles'

const Login: React.FC = () => {
    return (
        <Container>
            <Content>
                <Text size={40}>Olá, seja bem-vindo!!</Text>

                <Form>
                    <Text size={16} weight={600} color="neutral">
                        Para acessar a plataforma, faça seu login.
                    </Text>
                </Form>
            </Content>
        </Container>
    )
}

export default Login
