import { render } from '@testing-library/react'
import Login, { Values as Props } from '../pages/login/index'

function renderLoginForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        email: 'teste@gmail.com',
        password: '44563'
    }
    return render(<Login {...defaultProps} {...props} />)
}

describe('<Login />', () => {
    test('should display a blank login form, with remember me checked by default', async () => {
        const { findByTestId } = renderLoginForm()

        const loginForm = await findByTestId('login-form')
    })
})
