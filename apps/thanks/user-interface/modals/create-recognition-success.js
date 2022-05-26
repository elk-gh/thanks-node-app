'use strict';
const { Modal, Blocks, Md } = require('slack-block-builder');

const createRecognitionRequestSuccess = () => {
    return Modal({ title: 'Create Recognition', close: 'Close' })
        .blocks(
            Blocks.Section({
                text: `Recognition successfully created ${Md.emoji('tada')}!!!`
            })
        )
        .buildToJSON();
};

module.exports = { createRecognitionRequestSuccess };
