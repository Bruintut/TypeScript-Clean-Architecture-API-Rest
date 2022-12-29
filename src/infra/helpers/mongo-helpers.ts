import { Collection, MongoClient } from "mongodb";

export const MongoHelper = {
  client: null as unknown as MongoClient,
  url: null as unknown as string,

  async connect(url: string) {
    this.client = await MongoClient.connect(url);
  },

  async disconnect() {
    await this.client.close();
  },

  getCollection(collectionName: string): Collection {
    return this.client.db().collection(collectionName);
  },
  map: (data: any) => {
    const { _id, ...rest } = data;
    return { ...rest, id: _id.toHexString() };
  },

  mapCollection: (collection: any[]): any[] => {
    return collection.map((c) => MongoHelper.map(c));
  },
};
