import { DataTypes } from 'sequelize';
import dbConnect from '../config/database';

const productModel = dbConnect.define(
  'Products',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name_product: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    timestamps: false,
    tableName: 'products',
  },
);

export default productModel;
