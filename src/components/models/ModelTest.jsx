import React from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {closeModel} from './ModelAction';

const ModelTest = ({closeModel}) => {
    return (     
        <Modal closeIcon open={true} onClose={closeModel} >
            <Modal.Header> Test Model </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <p>Test Model........</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

const mapDispatchToProps = {
    closeModel
}

export default connect(null,mapDispatchToProps)(ModelTest)
