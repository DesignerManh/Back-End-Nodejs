const express = require("express");
const app = express();
const route = require("./routes/client/index.route"); // Nhúng code ở file index.route.js

// Cấu hình thằng pug vào trong dự án
app.set("views", "./views");
app.set("view engine", "pug");

// Nhúng code ở file index.route.js
route(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
