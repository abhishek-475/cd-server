const jsonserver = require("json-server");

const cdServer = jsonserver.create();

const middleWare = jsonserver.defaults();

const router = jsonserver.router("db.json");

cdServer.use(middleWare);
cdServer.use(router);

const PORT = 3000 || process.env.PORT;

cdServer.listen(PORT, () => {
  console.log("Server running at PORT:" + PORT);
});
