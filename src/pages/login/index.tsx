import { Form, Formik, FormikHelpers } from 'formik'
import Head from 'next/head'
import Photo from '../../assets/shutterstocks.webp'
import { Button, Img, Text, TextInput } from '../../components'
import { Container, Content, ContentForm, Item } from './styles'

interface Values {
    email: string
    password: string
}

const Login: React.FC = () => {
    return (
        <>
            <Head>
                <title>Login | Teste Wiser</title>
            </Head>
            <Container>
                <Item flex={1}>
                    <Img
                        src={Photo}
                        alt="imagen de uma mulher olhando para um notebook"
                    />
                </Item>
                <Item flex={1}>
                    <Content>
                        <ContentForm>
                            <Text size="40px">Olá, seja bem-vindo!</Text>
                            <Text
                                size="16px"
                                weight={600}
                                marginTop="16px"
                                marginBottom="40px"
                                width="222px"
                                color="neutral"
                            >
                                Para acessar a plataforma, faça seu login.
                            </Text>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                onSubmit={(
                                    values: Values,
                                    { setSubmitting }: FormikHelpers<Values>
                                ) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2))
                                        setSubmitting(false)
                                    }, 500)
                                }}
                            >
                                <Form>
                                    <TextInput
                                        id="email"
                                        name="E-mail"
                                        placeholder="user.name@mail.com"
                                        msgError="Digite um e-mail válido;"
                                    />

                                    <TextInput
                                        id="password"
                                        name="Senha"
                                        placeholder="*******"
                                        msgError="Senha Inválida,;"
                                    />

                                    <Button type="submit"> Entrar </Button>
                                </Form>
                            </Formik>
                            <Text
                                size="14px"
                                color="neutral"
                                marginTop="32px"
                                align="center"
                            >
                                Esqueceu seu login ou senha? Clique
                                <a href="/"> aqui</a>
                            </Text>
                        </ContentForm>
                    </Content>
                </Item>
            </Container>
        </>
    )
}

export default Login
