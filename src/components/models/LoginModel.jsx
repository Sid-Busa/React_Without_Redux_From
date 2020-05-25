import React from 'react'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {closeModel} from './ModelAction';
import Login from '../Authentication/Login/Login';

const LoginModel = ({closeModel}) => {
    return (
        <Modal size="mini" open={true} onClose={closeModel}>
            <Modal.Header> Login </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Login />
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

const mapDispatchToProps = {
    closeModel
}

export default connect(null,mapDispatchToProps)(LoginModel)
