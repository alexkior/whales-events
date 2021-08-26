'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('Tags', [{
                tagName: 'Python',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tagName: 'JavaScript',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tagName: 'Java',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tagName: 'C#',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tagName: 'C++',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tagName: 'Go',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tagName: 'Swift',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tagName: 'PHP',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

    },

    down: async(queryInterface, Sequelize) => {


        await queryInterface.bulkDelete('Tags', null, {});

    }
};