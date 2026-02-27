const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();
const app = require("./src/app");
const connectTODB = require("./src/config/database");

connectTODB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running successfully on port ${PORT}`);
});
