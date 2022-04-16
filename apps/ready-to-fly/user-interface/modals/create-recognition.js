'use strict';
const { Modal, Blocks, Elements, Bits } = require('slack-block-builder');

const createTravelRequestForm = (approvers) => {
    return Modal({ title: 'New Recognition', submit: 'Submit' })
        .blocks(
            Blocks.Input({ label: 'Category' })
                .element(
                    Elements.TextInput({
                        placeholder: 'Thank you!'
                    }).actionId('input-category')
                )
                .blockId('input-category'),
            Blocks.Input({ label: 'Message' })
                .element(
                    Elements.TextInput({
                        placeholder: 'Thank you!'
                    }).actionId('input-cost')
                )
                .blockId('input-cost'),
            Blocks.Input({ label: 'Who' })
                .element(
                    Elements.StaticSelect({
                        placeholder: 'Select Person...'
                    })
                        .actionId('input-person')
                        .options(
                            approvers.map((approver) =>
                                Bits.Option({
                                    text: approver.name,
                                    value: approver.id
                                })
                            )
                        )
                )
                .blockId('input-person'), // Map items to Option objects
        )
        .callbackId('initiate_travel_request')
        .buildToJSON();
};

module.exports = { createTravelRequestForm };
