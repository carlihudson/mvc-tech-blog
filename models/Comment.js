// dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:  {
                model: 'user',
                key: 'id',
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            }
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        comment_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        } 
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'comment'
    },
);

module.exports = Comment;

