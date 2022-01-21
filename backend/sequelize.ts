import { Sequelize } from "sequelize-typescript";
import { DataBaseCredentials } from "./config";

const sequelize = new Sequelize({
  ...DataBaseCredentials,
  dialect: "mysql",
  models: [__dirname + "/models"],
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
  },
});

export default sequelize;
