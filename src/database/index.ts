import { MongoClient, Collection, MongoDBNamespace, Db } from "mongodb";
import { WarehoueseDB } from "./warehouse";
export const DB_LIST = {
  WAREHOUSE: "warehouse",
};

export namespace DBService {
  let client: MongoClient;
  export async function initialize(URI: string) {
    client = new MongoClient(URI);
    await client.connect();
    console.log("Connection Initilaized!!!")
    await WarehoueseDB.initialize(client);
    console.log("DB Setup completed...!!!")

  }

  export async function getMongoClient(): Promise<MongoClient> {
    return client;
  }
}
