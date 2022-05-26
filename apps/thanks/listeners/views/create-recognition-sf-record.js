'use strict';

const {
    createRecognitionRequestSuccess,
    createRecognitionRequestCreationFailed
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
    const people =
        view['state']['values']['input-people']['input-people'].selected_users;
    const categories =
        view['state']['values']['input-category']['input-category']
            .selected_option.value;
    const message =
        view['state']['values']['input-message']['input-message'].value;
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
            const recognitionRequestInput = {
                categories,
                people,
                message
            };
            try {
                // Insert recognition
                const result = await insertRecognition(
                    context.sfconnection,
                    recognitionRequestInput
                );
                if (result.success) {
                    // Trigger a Success Modal
                    await client.views.open({
                        trigger_id: body.trigger_id,
                        view: createRecognitionRequestSuccess()
                    });
                    // Navigate to app home
                    thanksCallback(context, client, userId);
                } else {
                    // Trigger a failure message Modal
                    await client.views.open({
                        trigger_id: body.trigger_id,
                        view: createRecognitionRequestCreationFailed()
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
