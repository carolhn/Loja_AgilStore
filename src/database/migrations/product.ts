import { DataTypes, Model, QueryInterface } from 'sequelize';
import { TProduct } from '../../types/product';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<TProduct>>('products', {
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
        type: DataTypes.DOUBLE,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('products');
  },
};
