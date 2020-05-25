import React from 'react'
import {  Menu, Button } from 'semantic-ui-react'
const SignOutMenu = ({signIn,register}) => {
    return (
            <Menu.Item position='right'>
                <Button onClick={signIn} content="Login" basic inverted />
                <Button onClick={register} content="Register" basic inverted style={{marginLeft:5}} />
            </Menu.Item> 
    )
}
export default SignOutMenu