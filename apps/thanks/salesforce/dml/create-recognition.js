'use strict';

const insertRecognition = async (connection, recognitionRequestInput) => {
    try {
        //Get the UserId
        const currentuser = await connection.identity();
        const result = connection.apex.post('/SlackService/', body);
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
