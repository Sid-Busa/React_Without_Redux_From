import React,{Fragment} from 'react'
import { Menu, Grid,Header } from 'semantic-ui-react'
import './style.css'
import { NavLink } from 'react-router-dom'
const SettingNav = () => {
    return (
        <Fragment>
            <Menu vertical className="setting-nav">
                <Header icon="user" attached color="grey" content="Profile" inverted />
                <Menu.Item as={NavLink} to="/settings/basic" > Basic Page </Menu.Item>
                <Menu.Item as={NavLink} to="/settings/about" > About me </Menu.Item>
                <Menu.Item as={NavLink} to="/settings/photos" > My Photos </Menu.Item>
            </Menu>
            <Grid.Row />
            <Menu vertical>
                <Header icon="setting" attached color="grey" content="Account" inverted />
                <Menu.Item as={NavLink} to="/settings/account" > My Account </Menu.Item>
            </Menu>
        </Fragment>
    )
}
export default SettingNav