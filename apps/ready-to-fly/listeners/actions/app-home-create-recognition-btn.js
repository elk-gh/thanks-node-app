'use strict';
const {
    openCreateRecognitionModal
} = require('../utils/create-recognition');

const createRecognitionCallback = async ({ body, ack, client, context }) => {
    try {
        await ack();
        await openCreateRecognitionModal(body.trigger_id, client, context);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

module.exports = { createRecognitionCallback };
