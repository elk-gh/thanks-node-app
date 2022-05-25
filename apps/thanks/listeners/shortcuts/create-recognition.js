'use strict';
const { openCreateRecognitionModal } = require('../utils/create-recognition');

const createRecognitionCallback = async ({
    shortcut,
    ack,
    client,
    context
}) => {
    try {
        await ack();
        await openCreateRecognitionModal(shortcut.trigger_id, client, context);
    } catch (e) {
        throw e;
    }
};

module.exports = { createRecognitionCallback };
