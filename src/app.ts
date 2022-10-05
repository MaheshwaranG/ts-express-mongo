import express from "express";
import { json } from "body-parser";

import router from "./router";

const port = 4141;

const app = express();
app.use(json());
app.use(router);

function intialize() {
  app.listen(port, () => {
    console.log("Server running on " + port);
  });
}

export default { intialize };
