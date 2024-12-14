const systemConfig = require("../../config/system");
const dashboardRoutes = require("./dashboard.route");

module.exports = (app) => {
    const PART_ADMIN = systemConfig.prefixAdmin;
  app.use(PART_ADMIN + "/dashboard", dashboardRoutes);
};
