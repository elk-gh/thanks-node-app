'use strict';
const {
    authorizationScreen,
    thanksScreen
} = require('../../user-interface/app-home');

const thanksCallback = async (context, client, slackUserId) => {
    if (!context.hasAuthorized) {
        const conn = context.sfconnection;
        const currentuser = await conn.identity();

        await client.views.publish({
            user_id: slackUserId,
            view: thanksScreen(currentuser.display_name, conn.instanceUrl)
        });
    } else {
        _publishAuthScreen(client, slackUserId);
    }
};

const _publishAuthScreen = async (client, slackUserId) => {
    await client.views.publish({
        user_id: slackUserId,
        view: authorizationScreen(
            `${process.env.HEROKU_URL}/oauthstart/${slackUserId}`
        )
    });
};

module.exports = { thanksCallback };
