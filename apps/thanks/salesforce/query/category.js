'use strict';

const fetchCategories = async (connection) => {
    try {
        const result = await connection.query(
            `SELECT Id, Name FROM CGRP_Category__c`
        );
        return result;
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = { fetchCategories };
