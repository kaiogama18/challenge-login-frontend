import { Form, Formik } from 'formik'
import Head from 'next/head'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import * as Yup from 'yup'
import Photo from '../../assets/shutterstocks.webp'
import { Button, Img, Text, TextInput } from '../../components'
import { ApplicationState } from '../../store'
import * as AuthActions from '../../store/ducks/auth/actions'
import { User } from '../../store/ducks/auth/types'
import { Container, Content, ContentForm } from '../../styles/global'

export interface Values {
    email: string
    senha: string
}

interface StateProps {
    code: number
    menssage: string
    data: User[]
}

interface DispatchProps {
    loginRequest(): void
}

// type Props = StateProps & DispatchProps & Values

const SignupSchema = Yup.object().shape({
    password: Yup.string(),
    email: Yup.string().email('Digite um e-mail válido;')
})

const Login: React.FC<StateProps> = ({ data, menssage }) => {
    const [isLogged, setIsLogged] = useState(menssage)
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
                        {/* <Text title>Olá, seja bem-vindo!</Text> */}

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
                            onSubmit={(values, actions) => {
                                if (values.email.length != 0) {
                                    // console.log({  values, actions })
                                    // alert(JSON.stringify(values, null, 2))
                                    alert(isLogged)
                                    actions.setSubmitting(false)
                                } else {
                                    alert('USUÁRIO NÃO ENCONTRADO')
                                    console.log({ values, actions })
                                }
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    {errors.email && touched.email ? (
                                        <TextInput
                                            id="email"
                                            name="E-mail"
                                            placeholder="user.name@mail.com"
                                            msgError={errors.email}
                                        />
                                    ) : (
                                        <TextInput
                                            id="email"
                                            name="E-mail"
                                            placeholder="user.name@mail.com"
                                        />
                                    )}

                                    {errors.password && touched.password ? (
                                        <TextInput
                                            id="password"
                                            name="Senha"
                                            placeholder="*******"
                                            msgError="Senha Inválida;"
                                        />
                                    ) : (
                                        <TextInput
                                            id="password"
                                            name="Senha"
                                            placeholder="*******"
                                        />
                                    )}

                                    <Button type="submit"> Entrar </Button>
                                </Form>
                            )}
                        </Formik>
                    </ContentForm>
                    <Text
                        fontSize="14px"
                        color="neutral"
                        colorMobile="white"
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
    code: state.auth.code,
    menssage: state.auth.menssage,
    data: state.auth.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
