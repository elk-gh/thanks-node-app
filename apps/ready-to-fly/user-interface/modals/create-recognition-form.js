'use strict';
const { Modal, Blocks, Elements, Bits } = require('slack-block-builder');

const createRecognitionForm = (categories) => {
    console.log('createRecognitionForm',categories);
    return Modal({ title: 'New Recognition', submit: 'Submit' })
        .blocks(
            Blocks.Input({ label: 'People to give thanks!' })
            .element(
              Elements.UserMultiSelect({ placeholder: 'Select people...' })
                .actionId('input-people')
            .blockId('input-people'),
            Blocks.Input({ label: 'Category' })
            .element(
                Elements.StaticSelect({
                    placeholder: 'Select a category...'
                })
                    .actionId('input-category')
                    .options(
                        categories.records.map((category) =>
                            Bits.Option({
                                text: category.Name,
                                value: category.Id
                            })
                        )
                    )
            )
            .blockId('input-category'),          
            Blocks.Input({ label: 'Message' })
            .element(
                Elements.TextInput({
                    placeholder: 'Thank you message'
                }).actionId('input-message')
            )
            .blockId('input-message'),
            /*.blockId('input-person'), // Map items to Option objects
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
                .blockId('input-person'), // Map items to Option objects*/
        )
        .callbackId('initiate_recognition')
        .buildToJSON();
};

module.exports = { createRecognitionForm };
