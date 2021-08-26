'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('Cities', [{
                cityName: 'Москва',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Санкт-Петербург',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Новосибирск',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Екатеринбург',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Нижний Новгород',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Казань',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Омск',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Ростов-на-Дону',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Волгоград',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Уфа',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: 'Калининград',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

    },

    down: async(queryInterface, Sequelize) => {


        await queryInterface.bulkDelete('Cities', null, {});

    }
};