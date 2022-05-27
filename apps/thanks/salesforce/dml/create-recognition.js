'use strict';

const insertRecognition = async (connection, recognitionRequestInput) => {
    let result = {};
    try {
        result = await connection.apex.post(
            '/v1/SlackService/',
            recognitionRequestInput
        );
    } catch (e) {
        result.success = false;
        result.message =
            'Failed to create recognition record in Salesforce ' + e.message;
    }
    return result;
};

module.exports = {
    insertRecognition
};
