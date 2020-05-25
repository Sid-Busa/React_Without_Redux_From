import React from 'react'
import { connect } from 'react-redux'
import { Form, Segment, Button } from 'semantic-ui-react'
import { Field,reduxForm } from 'redux-form'
import InputText from '../../Form/InputText'
import { login } from '../../../Actions/authAction'

const Login = ({login,handleSubmit}) => {

    return (
        <Form error onSubmit={handleSubmit((value) => login(value))} autoComplete='off'>
            <Segment>
                <Field 
                    placeholder="Enter email"
                    type="text"
                    name="email"
                    component={InputText}
                />
                <Field 
                    placeholder="Enter password"
                    type="text"
                    name="password"
                    component={InputText}
                />
                <Button fluid size='large' color="teal">
                    Login
                </Button>
            </Segment>
        </Form>
    )
}
const mapDispatchToProps = {
    login
}
export default connect(null,mapDispatchToProps)(reduxForm({form:'loginForm'})(Login))
