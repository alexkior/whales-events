'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Events', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            eventName: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: { tableName: 'Users' },
                    key: 'id'
                }
            },
            tagId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Tags'
                    },
                    key: 'id'
                }
            },
            cityId: {
                type: Sequelize.INTEGER,
                references: {
                    model: { tableName: 'Cities' },
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Events');
    }
};