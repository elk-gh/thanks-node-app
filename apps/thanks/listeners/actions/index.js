'use strict';
const { appHomeAuthorizeButtonCallback } = require('./app-home-authorize-btn');
const {
    createRecognitionCallback
} = require('./app-home-create-recognition-btn');

module.exports.register = (app) => {
    app.action('authorize-with-salesforce', appHomeAuthorizeButtonCallback);
    app.action('create-recognition', createRecognitionCallback);
};
