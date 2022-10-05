import app from "./app";
import {DBService} from "./database"
import {envConfig} from "./config"
DBService.initialize(envConfig.MONGO_CONNECTION_URI).then(() => {
    app.intialize();
})
