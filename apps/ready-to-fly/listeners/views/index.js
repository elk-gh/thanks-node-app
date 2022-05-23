'use strict';

const {
    createRecognitionCallback
} = require('./create-recognition-sf-record');

module.exports.register = (app) => {
    app.view('initiate_recognition', createRecognitionCallback);
};
