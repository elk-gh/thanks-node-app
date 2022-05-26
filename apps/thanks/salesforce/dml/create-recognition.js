'use strict';

const insertRecognition = async (connection, recognitionRequestInput) => {
    try {
        console.log(
            'insertRecognition recognitionRequestInput',
            recognitionRequestInput
        );
        const result = connection.apex.post(
            '/SlackService/',
            recognitionRequestInput
        );
        if (!result.success) {
            throw (
                'Failed to create travel request record in Salesforce ' +
                result.err[0]
            );
        }
        return result;
    } catch (e) {
        throw (
            'Failed to create travel request record in Salesforce ' + e.message
        );
    }
};

module.exports = {
    insertRecognition
};
