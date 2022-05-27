'use strict';

const {
    authorizeSalesforcePrompt,
    createRecognitionForm
} = require('../../user-interface/modals');

const { fetchCategories } = require('../../salesforce/query/category');

const openCreateRecognitionModal = async (triggerId, client, context) => {
    if (context.hasAuthorized) {
        const categories = await fetchCategories(context.sfconnection);
        await client.views.open({
            trigger_id: triggerId,
            view: createRecognitionForm(categories)
        });
    } else {
        // Get BotInfo
        const botInfo = await client.bots.info({ bot: context.botId });
        // Open a Modal with message to navigate to App Home for authorization
        await client.views.open({
            trigger_id: triggerId,
            view: authorizeSalesforcePrompt(context.teamId, botInfo.bot.app_id)
        });
    }
};

module.exports = { openCreateRecognitionModal };
