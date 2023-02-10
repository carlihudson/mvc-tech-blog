// dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING, 
            allowNull: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        timestamp: {
            type: DataTypes.DATE, 
            allowNull: false,
        }, 
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false, 
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'post'
    }
)

module.exports = Post;