'use strict';
const { authorizeSalesforcePrompt } = require('./authorize-sf-prompt');
const { createTravelRequestForm } = require('./create-travel-request-form');
const { createRecognitionForm } = require('./create-recognition-form');
const { travelRequestSuccess } = require('./travel-request-success');
const { travelRequestApproved } = require('./travel-request-approved');
const { travelRequestRejected } = require('./travel-request-rejected');
const {
    travelRequestCreationFailed
} = require('./travel-request-create-failed');

module.exports = {
    authorizeSalesforcePrompt,
    createTravelRequestForm,
    createRecognitionForm,
    travelRequestSuccess,
    travelRequestApproved,
    travelRequestRejected,
    travelRequestCreationFailed
};
