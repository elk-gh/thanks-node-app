'use strict';

const insertRecognition = async (connection, recognitionRequestInput) => {
    try {
        console.log(
            'insertRecognition recognitionRequestInput',
            recognitionRequestInput
        );
        const result = connection.apex.post(
            '/v1/SlackService/',
            recognitionRequestInput
        );
        if (!result.success) {
            throw (
                'Failed to create recognition record Salesforce ' +
                result.message
            );
        }
        return result;
    } catch (e) {
        throw 'Failed to create recognition record in Salesforce ' + e.message;
    }
};

module.exports = {
    insertRecognition
};
