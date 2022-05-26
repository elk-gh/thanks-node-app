'use strict';

const {
    travelRequestSuccess,
    travelRequestCreationFailed
} = require('../../user-interface/modals');
const {
    insertRecognition
} = require('../../salesforce/dml/create-recognition');
const { thanksCallback } = require('../utils/home-tab-callbacks');

const createRecognitionCallback = async ({
    ack,
    client,
    context,
    view,
    body
}) => {
    // Capture Data Input for the travel request record creation in Salesforce
    const data = view['state']['values'];
    console.log('input data', JSON.parse(JSON.stringify(data)));
    const people =
        view['state']['values']['input-people']['input-people'].selected_users;
    console.log('input data', JSON.parse(JSON.stringify(people)));
    const categories =
        view['state']['values']['input-category']['input-category']
            .selected_option;
    console.log('input data', JSON.parse(JSON.stringify(categories)));
    const message =
        view['state']['values']['input-message']['input-message'].value;
    console.log('input data', JSON.parse(JSON.stringify(message)));
    // Add validations to forms before acknowledgement
    // This shows how to validate if cost contains only numbers and not a string
    if (message.length < 30) {
        await ack({
            response_action: 'errors',
            errors: {
                'input-message': 'Please enter at least 30 characters'
            }
        });
    } else {
        await ack();
        if (context.hasAuthorized) {
            // We do not use it, but this is how you can extract the Id of the Slack user from view listeners
            const userId = body['user']['id'];

            let users = [
                { Id: '0052S00000B9NbZ', SlackMemberId__c: 'U02NV5C2SMS' }
            ];
            let lstUsersJSON = JSON.stringify(users);
            const recognitionRequestInput = {
                categories,
                lstUsersJSON,
                message
            };

            try {
                // Insert travel request
                const result = await insertRecognition(
                    context.sfconnection,
                    recognitionRequestInput
                );
                if (result.success) {
                    // Trigger a Success Modal
                    await client.views.open({
                        trigger_id: body.trigger_id,
                        view: travelRequestSuccess()
                    });
                    // Navigate to app home
                    thanksCallback(context, client, userId);
                } else {
                    // Trigger a failure message Modal
                    await client.views.open({
                        trigger_id: body.trigger_id,
                        view: travelRequestCreationFailed()
                    });
                }
            } catch (e) {
                throw e;
            }
        } else {
            // Get BotInfo
            const botInfo = await client.bots.info({ bot: context.botId });
            // Open a Modal with message to navigate to App Home for authorization
            await client.views.open({
                trigger_id: shortcut.trigger_id,
                view: authorizeSalesforcePrompt(
                    context.teamId,
                    botInfo.bot.app_id
                )
            });
        }
    }
};

module.exports = { createRecognitionCallback };
