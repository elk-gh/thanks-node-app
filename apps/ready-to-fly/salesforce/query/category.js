'use strict';

const fetchCategories = async (connection) => {
    try {
        //Get the UserId
        const currentuser = await connection.identity();
        // Query for Managers up to 2 levels
        const result = await connection.query(
            `SELECT Id, Name FROM CGRP_Category__c`
        );
        return result;
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = { fetchCategories };
