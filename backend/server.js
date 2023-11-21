const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

//Connect to DB
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Holidecor API" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/houses", require("./routes/houseRoutes"));
app.use("/api/houses/:houseId/comments", require("./routes/commentRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
