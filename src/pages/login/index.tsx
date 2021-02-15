import { Form, Formik, FormikHelpers } from 'formik'
import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import * as Yup from 'yup'
import Photo from '../../assets/shutterstocks.webp'
import { Button, Img, Text, TextInput } from '../../components'
import { ApplicationState } from '../../store'
import * as AuthActions from '../../store/ducks/auth/actions'
import { User } from '../../store/ducks/auth/types'
import { Container, Content, ContentForm } from './styles'

interface Values {
    email: string
    password: string
}

interface StateProps {
    auth: User[]
    loading: boolean
}

interface DispatchProps {
    loginRequest(): void
}

type Props = StateProps & DispatchProps

const SignupSchema = Yup.object().shape({
    password: Yup.string(),
    email: Yup.string().email('Digite um e-mail válido;')
})

const Login: React.FC<Props> = ({ auth }) => {
    return (
        <>
            <Head>
                <title>Login | Teste Wiser</title>
            </Head>
            <Container>
                <Img
                    src={Photo}
                    alt="imagen de uma mulher olhando para um notebook"
                />
                <Content>
                    <ContentForm>
                        <Text fontSize="40px" fontMobile="24px">
                            Olá, seja bem-vindo!
                        </Text>
                        <Text
                            fontSize="16px"
                            fontMobile="12px"
                            weight={600}
                            marginTop="5%"
                            marginBottom="5%"
                            width="90%"
                            color="neutral"
                        >
                            Para acessar a plataforma, faça seu login.
                        </Text>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={SignupSchema}
                            onSubmit={(
                                values: Values,
                                { setSubmitting }: FormikHelpers<Values>
                            ) => {
                                setTimeout(() => {
                                    alert('USUÁRIO ENCONTRADO COM SUCESSO')
                                    setSubmitting(false)
                                }, 500)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <TextInput
                                        id="email"
                                        name="E-mail"
                                        placeholder="user.name@mail.com"
                                    />

                                    {errors.email && touched.email ? (
                                        <Text
                                            fontSize="10px"
                                            color="error"
                                            marginTop="6px"
                                            marginLeft="10px"
                                        >
                                            {errors.email}
                                        </Text>
                                    ) : (
                                        <div className="sucess">sucess</div>
                                    )}

                                    <TextInput
                                        id="password"
                                        name="Senha"
                                        placeholder="*******"
                                        msgError="Senha Inválida;"
                                    />

                                    {errors.password && touched.password ? (
                                        <Text
                                            fontSize="10px"
                                            color="error"
                                            marginTop="6px"
                                            marginLeft="10px"
                                        >
                                            {errors.email}
                                        </Text>
                                    ) : null}

                                    <Button type="submit"> Entrar </Button>
                                </Form>
                            )}
                        </Formik>
                    </ContentForm>
                    <Text
                        fontSize="14px"
                        color="neutral"
                        align="center"
                        marginLeft="22%"
                        width="212px"
                    >
                        Esqueceu seu login ou senha? Clique
                        <a href="/"> aqui</a>
                    </Text>
                </Content>
            </Container>
        </>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    auth: state.auth.data,
    loading: state.auth.loading
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
