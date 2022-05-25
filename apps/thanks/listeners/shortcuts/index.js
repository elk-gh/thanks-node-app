'use strict';

const { createRecognitionCallback } = require('./create-recognition');

module.exports.register = (app) => {
    app.shortcut('create-recognition', createRecognitionCallback);
};
