import express from "express";
const server = express();

server.use((req, res) => {
  res.status(200).json({ succes: "BOOBA" });
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
