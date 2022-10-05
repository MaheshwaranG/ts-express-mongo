import { Db } from "mongodb";
export namespace DBUtils {
  export async function ensureCollection(
    db: Db,
    colName: string
  ): Promise<void> {
    const collection = await db.listCollections({ name: colName }).toArray();

    if (!collection.length) {
      await db.createCollection(colName);
    }
  }
}
