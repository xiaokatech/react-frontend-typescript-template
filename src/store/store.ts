import { createStore, applyMiddleware, compose, type Middleware } from "redux";
import { createRootReducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@react-native-async-storage/async-storage";

import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

export interface IAction {
  type: string;
  payload?: any;
}

const rootReducer = createRootReducer();

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['someSpecificReducerName'], // only persist specific reducers
  // blacklist: ['anotherReducerName'],    // do not persist these reducers
};

// const isProd = process.env.NODE_ENV === "production";
const isProd = false;

export function configureStore(initialState = {}) {
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const storeComposeEnhancers =
    (!isProd &&
      typeof window !== "undefined" &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  let settingMiddleware;

  if (!isProd) {
    settingMiddleware = applyMiddleware(
      thunk,
      createLogger() as Middleware<any, any, any>
    );
  } else {
    settingMiddleware = applyMiddleware(thunk);
  }

  const store = createStore(
    persistedReducer,
    initialState,
    storeComposeEnhancers(settingMiddleware)
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
