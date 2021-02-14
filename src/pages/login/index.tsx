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
                            <Text size={40}>
                                Olá, seja <br></br>bem-vindo!
                            </Text>
                            <Text
                                size={16}
                                weight={600}
                                marginTop={16}
                                marginBottom={40}
                                color="neutral"
                            >
                                Para acessar a plataforma, <br></br>faça seu
                                login.
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
                                    />

                                    <TextInput
                                        id="password"
                                        name="Senha"
                                        placeholder="*******"
                                    />

                                    <Button type="submit"> Entrar </Button>
                                </Form>
                            </Formik>
                            <Text
                                size={14}
                                color="neutral"
                                marginTop={32}
                                align="center"
                            >
                                Esqueceu seu login ou senha? <br></br>Clique
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
