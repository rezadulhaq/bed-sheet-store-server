"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Category, {
                foreignKey: "CategoryId",
            });
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            size: DataTypes.STRING,
            stock: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            price: DataTypes.INTEGER,
            CategoryId: DataTypes.INTEGER,
            imageUrl: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
