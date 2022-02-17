import { Reducer, Middleware, Store } from "redux";

export default interface StoreCreator {
    (localReducers: Record<string, Reducer>, persistedReducers: Record<string, Reducer>, middleware?: Middleware[], log?: boolean): Store;
};