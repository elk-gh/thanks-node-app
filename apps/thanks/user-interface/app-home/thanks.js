'use strict';

const { HomeTab, Blocks, Elements, Md } = require('slack-block-builder');

const thanksScreen = (username, instanceUrl) => {
    const homeTab = HomeTab();
    homeTab.blocks(
        Blocks.Header({
            text: `Thanks!`
        }),
        Blocks.Divider()
    );

    const createNewRecognitionButton = Elements.Button({
        actionId: 'create-recognition',
        text: 'Create New Recognition'
    });
    homeTab.blocks(Blocks.Divider());
    homeTab.blocks(Blocks.Actions().elements(createNewRecognitionButton));

    return homeTab.buildToJSON();
};

module.exports = {
    thanksScreen
};
