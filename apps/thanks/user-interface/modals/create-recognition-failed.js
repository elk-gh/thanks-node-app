'use strict';
const { Modal, Blocks, Md } = require('slack-block-builder');

const createRecognitionRequestCreationFailed = (message) => {
    return Modal({ title: 'Create Recognition', close: 'Close' })
        .blocks(
            Blocks.Section({
                text: `Ops! recognition creation failed ${message}`
            })
        )
        .buildToJSON();
};

module.exports = { createRecognitionRequestCreationFailed };
