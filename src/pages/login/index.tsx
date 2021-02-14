import { Form, Formik, FormikHelpers } from 'formik'
import Text from '../../components/text'
import TextInput from '../../components/textInput'
import { Container, Content, ContentForm } from './styles'

interface Values {
    email: string
    password: string
}

const Login: React.FC = () => {
    return (
        <Container>
            <Content>
                <Text size={40}>Olá, seja <br></br>bem-vindo!!</Text>
                <ContentForm>
                    <Text size={16} weight={600} color="neutral">
                        Para acessar a plataforma, <br></br>faça seu login.
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

                            <button type="submit">Entrar</button>
                        </Form>
                    </Formik>
                </ContentForm>
            </Content>
        </Container>
    )
}

export default Login

{
    /* <label htmlFor="email">E-mail</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="user.name@mail.com"
                            /> */
}
{
    /* <label htmlFor="password">Senha</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="*******"
                            /> */
}
