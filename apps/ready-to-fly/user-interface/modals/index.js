'use strict';
const { authorizeSalesforcePrompt } = require('./authorize-sf-prompt');
const { createRecognitionForm } = require('./create-recognition-form');
const {
    travelRequestCreationFailed
} = require('./travel-request-create-failed');

module.exports = {
    authorizeSalesforcePrompt,
    createRecognitionForm,
};
