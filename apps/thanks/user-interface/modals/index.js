'use strict';
const { authorizeSalesforcePrompt } = require('./authorize-sf-prompt');
const { createRecognitionForm } = require('./create-recognition-form');
const {
    createRecognitionRequestSuccess
} = require('./create-recognition-success');
const {
    createRecognitionRequestCreationFailed
} = require('./create-recognition-failed');

module.exports = {
    authorizeSalesforcePrompt,
    createRecognitionForm,
    createRecognitionRequestSuccess,
    createRecognitionRequestCreationFailed
};
