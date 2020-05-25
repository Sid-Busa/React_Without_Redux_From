import React from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import InputText from '../../Form/InputText'

const Register = () => {
    return (
        <Form>
            <Segment>
                <Field 
                    name="displayName"
                    type="text"
                    placeholder="Known As"
                    component={InputText}
                />
                <Field 
                    name="email"
                    type="text"
                    placeholder="Email"
                    component={InputText}
                />
                <Field 
                    name="password"
                    type="text"
                    placeholder="Password"
                    component={InputText}
                />
                <Button fluid color="teal" size='large'>
                    Register
                </Button>
            </Segment>
        </Form>
    )
}

export default reduxForm({form:'registerForm'})(Register)
