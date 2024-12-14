const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

const database = require("./config/database");
database.connect();

const systemconfig = require("./config/system");
const routeClient = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

app.set("views", "./views"); // Tìm đến thư mục tên là views
app.set("view engine", "pug"); // template engine sử dụng: pug

app.locals.prefixAdmin = systemconfig.prefixAdmin;
app.use(express.static("public")); // Thiết lập thư mục chứa file tĩnh

routeClient(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
