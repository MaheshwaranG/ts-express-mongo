import { Collection, Db, MongoClient } from "mongodb";
import { DB_LIST } from "./index";
import { DBUtils } from "./db-common-utils";

export namespace WarehoueseDB {
  export const COLLECTIONS = {
    FACILITY: "facility",
    USER: "user",
  };

  export interface IItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    min_stock: number;
    max_stock: number;
  }

  export interface IOrder {
    id: string;
    user_id: string;
    price: number;
    quantity: number;
    item_id: string;
    address: string;
  }

  export interface IFacility {
    id: string;
    name: string;
    pincode: string;
    state: string;
    items: IItem;
    orders: IOrder;
  }

  export interface IUser {
    id: string;
    name: string;
    email: string;
  }

  export type ICollections = {
    facility: Collection<IFacility>;
    user: Collection<IUser>;
  };

  export let db: Db;
  export let collections: ICollections = {} as ICollections;

  export async function initialize(client: MongoClient) {
    db = client.db(DB_LIST.WAREHOUSE);
    await DBUtils.ensureCollection(db, COLLECTIONS.FACILITY);
    await DBUtils.ensureCollection(db, COLLECTIONS.USER);
    collections = {
      facility: db.collection(COLLECTIONS.FACILITY),
      user: db.collection(COLLECTIONS.USER),
    };
  }
}
