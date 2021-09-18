import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { rootSaga } from "../saga";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
