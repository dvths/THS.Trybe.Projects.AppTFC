import { Model, STRING, INTEGER, DATE } from 'sequelize';
import db from '.';

class User extends Model {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

User.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    role: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    password_hash: {
      type: STRING,
      allowNull: false
    }
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'user',
    timestamps: true,
  }
);

export default User;