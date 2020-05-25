import React from 'react'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {closeModel} from './ModelAction';
import Register from '../Authentication/Register/Register';

const RegisterModel = ({closeModel}) => {
    return (
        <Modal size="mini" open={true} onClose={closeModel} >
            <Modal.Header> Login </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Register />    
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}
const mapDispatchToProps = {
    closeModel
}
export default connect(null,mapDispatchToProps)(RegisterModel)
