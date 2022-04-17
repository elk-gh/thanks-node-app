'use strict';

const {
    createTravelRequestCallback
} = require('./create-travel-request-sf-record');

const {
    createRecognitionCallback
} = require('./create-recognition-sf-record');

module.exports.register = (app) => {
    app.view('initiate_travel_request', createTravelRequestCallback);
    app.view('initiate_recognition', createRecognitionCallback);
};
