const express = require("express");
require("dotenv").config();
const app = express();

const route = require("./routes/client/index.route"); // Nhúng code ở file index.route.js


const port = process.env.PORT;
// Cấu hình thằng pug vào trong dự án
app.set("views", "./views");
app.set("view engine", "pug");

// Nhúng code ở file index.route.js
route(app);

app.listen(port, () => {
  console.log(` Server is running on port ${port} `);
});
