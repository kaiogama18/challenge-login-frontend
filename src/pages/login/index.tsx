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
    loginRequest: (email: string, senha: string) => void


    // loginRequest: (
    //     type: 'LOGIN_REQUEST',
    //     email: string,
    //     senha: string
    // ) => void



}

// type Props = StateProps & DispatchProps & Values
type Props = StateProps & DispatchProps

const SignupSchema = Yup.object().shape({
    password: Yup.string(),
    email: Yup.string().email('Digite um e-mail válido;')
})

const Login: React.FC<Props> = ({ code, menssage, loginRequest }) => {
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
                        <Text title>Olá, seja bem-vindo!</Text>

                        <Text subTitle>
                            Para acessar a plataforma, faça seu login.
                        </Text>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={SignupSchema}
                            onSubmit={(values, actions) => {
                                if (values.email.length != 0) {
                                    // loginRequest(values.email, values.password)
                                    // AuthActions.loginRequest(values.email, values.password)

                                    // loginRequest(values.email, values.password)

                                    // onSomeButtonClicked() {
                                    //     const { userId, dispatch } = this.props
                                    //     dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
                                    //   }

                                    alert('USUÁRIO ENCONTRADO COM SUCESSO')

                                    console.log(
                                        '==> Code: ' + code,
                                        ' --> Menssage: ' + menssage
                                    )
                                    // alert(isLogged)
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
                    <Text label align="center" marginLeft="22%">
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

// const mapDispatchToProps = dispatch => {
//     return {
//       // dispatching plain actions
//       increment: () => dispatch({ type: 'INCREMENT' }),
//       decrement: () => dispatch({ type: 'DECREMENT' }),
//       reset: () => dispatch({ type: 'RESET' })
//     }
//   }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
