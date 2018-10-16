const Sequelize = require('sequelize')
const db = require('../db')

const Story = db.define('story', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    dateOfEvent: {
        type: Sequelize.STRING,
    },

    eventDetails: {
        type: Sequelize.TEXT,
    },
    hash: {
        type: Sequelize.TEXT,
    },
})

module.exports = Story
