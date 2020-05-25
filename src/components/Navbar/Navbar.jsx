import React, { Component } from "react";
import { connect } from "react-redux";
import { openModel } from "../models/ModelAction";
import { logout } from "../../Actions/authAction";
import { NavLink, Link, withRouter } from "react-router-dom";
import { path } from "../../constants/Path";
import SignOutMenu from "../Menu/SignOutMenu";
import SignInMenu from "../Menu/SignInMenu";
import { Menu, Container, Button } from "semantic-ui-react";
import "./style.css";

class Navbar extends Component {
  handleSignIn = () => {
    this.props.openModel("LoginModel");
  };
  handleRegister = () => {
    this.props.openModel("RegisterModel");
  };
  handleSignOut = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    return (
      <div>
        <Menu fixed="top" className="navbar">
          <Container>
            <Menu.Item as={NavLink} exact to={path.home} header>
              <img src="/assets/Dave.jpg" alt="Crush" />
              Dave
            </Menu.Item>
            <Menu.Item as={NavLink} exact to={path.eventDashboard}>
              Events
            </Menu.Item>
            {auth.authentication && (
              <>
                <Menu.Item as={NavLink} to={path.peopleDashboard}>
                  People
                </Menu.Item>
                <Menu.Item as={NavLink} to={path.testForRedux}>
                  TestForRedux
                </Menu.Item>
                <Menu.Item as={NavLink} to={path.video}>
                  Video
                </Menu.Item>
                <Menu.Item>
                  <Button
                    as={Link}
                    to={path.eventForm}
                    content="Create Events"
                    color="green"
                  />
                </Menu.Item>{" "}
              </>
            )}
            {auth.authentication ? (
              <SignInMenu
                signOut={this.handleSignOut}
                currentUser={auth.currentUser}
              />
            ) : (
              <SignOutMenu
                signIn={this.handleSignIn}
                register={this.handleRegister}
              />
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  openModel,
  logout,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
