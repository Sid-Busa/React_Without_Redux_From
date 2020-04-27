import React, { Component } from 'react'
import { NavLink,Link,withRouter } from 'react-router-dom';
import {  Menu, Container, Button } from 'semantic-ui-react';
import {path} from '../../constants/Path';
import './style.css';
import SignOutMenu from '../Menu/SignOutMenu';
import SignInMenu from '../Menu/SignInMenu';


class Navbar extends Component {
    state ={
        auth : false
    }
    handleSignIn = () =>{
        this.setState({ auth:true })
    }
    handleSignOut = () =>{
        this.props.history.push('/')
        this.setState({ auth:false })
    }
    render() {
        const {auth} = this.state 
        return (
            <div>
               <Menu fixed='top' className="navbar">
                   <Container>
                       <Menu.Item as={NavLink} exact to={path.home} header >
                           <img src="/assets/Dave.jpg" alt="Crush" />
                           Dave
                       </Menu.Item>
                       <Menu.Item as={NavLink} exact to={path.eventDashboard}>
                           Events
                       </Menu.Item>
                       <Menu.Item as={NavLink} to={path.peopleDashboard}>
                           People
                       </Menu.Item>
                       <Menu.Item as={NavLink} to={path.testForRedux}>
                           TestForRedux
                       </Menu.Item>
                       <Menu.Item>
                           <Button as={Link} to={path.eventForm} content="Create Events" color='green'/>
                       </Menu.Item>
                       {auth ? <SignInMenu signOut={this.handleSignOut} />  : <SignOutMenu signIn={this.handleSignIn} />} 
                   </Container>
               </Menu>
            </div>
        )
    }
}
export default withRouter(Navbar)