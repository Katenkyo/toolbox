import express from "express";
import sequelize from "./sequelize";
const server = express();

sequelize.sync();
server.use((req, res) => {
  res.status(200).json({ succes: "BOOBA" });
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
