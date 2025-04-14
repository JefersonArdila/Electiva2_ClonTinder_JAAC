require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const swipeRoutes = require("./routes/swipes");
const app = express();

const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(express.json());
app.use("/api", userRoutes, authRoutes, swipeRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
