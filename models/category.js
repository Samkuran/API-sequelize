import { DataTypes } from 'sequelize';
import sequelize from '../connection/database.js';

const Category = sequelize.define('Category', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW  
  }
}, {
  tableName: 'tb_category',
  timestamps: false 
});

export default Category;