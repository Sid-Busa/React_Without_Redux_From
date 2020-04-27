import React from 'react'
import {  Menu, Button } from 'semantic-ui-react'
const SignOutMenu = ({signIn}) => {
    return (
            <Menu.Item position='right'>
                <Button onClick={signIn} content="Login"  />
                <Button  content="SignOut" style={{marginLeft:5}} />
            </Menu.Item>
    )
}
export default SignOutMenu