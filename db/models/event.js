'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Tag, City, User }) {
            // define association here
            this.belongsTo(Tag, {
                    foreignKey: 'tagId'
                }),
                this.belongsTo(City, {
                    foreignKey: 'cityId'
                }),
                this.belongsTo(User, {
                    foreignKey: 'userId'
                })
        }
    };
    Event.init({
        eventName: DataTypes.STRING,
        date: DataTypes.DATE,
        userId: DataTypes.INTEGER,
        tagId: DataTypes.INTEGER,
        cityId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Event',
    });
    return Event;
};
