'use strict';

const appHomeOpenedCallback = async ({ client, event, body, context }) => {
    if (event.tab !== 'home') {
        // Ignore the `app_home_opened` event for everything
        // except for home screen as we don't support a conversational UI
        return;
    }
    try {

    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

module.exports = { appHomeOpenedCallback };
