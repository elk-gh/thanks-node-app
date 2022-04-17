'use strict';

const { createTravelRequestCallback } = require('./create-travel-request');
const { createRecognitionCallback } = require('./create-recognition');

module.exports.register = (app) => {
    app.shortcut('create-travel-request', createTravelRequestCallback);
    app.shortcut('create-recognition', createRecognitionCallback);
};
