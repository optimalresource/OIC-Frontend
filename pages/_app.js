import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import crossBrowserListener from "../redux/utils/redux-persist-listener";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import MainLayout from "components/layouts/MainLayout";

const persistConfig = {
  key: "counter",
  storage,
  stateReconciler: hardSet,
};

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener(
      "storage",
      crossBrowserListener(store, persistConfig)
    );
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AnimatePresence>
          {Component.getLayout ? (
            Component.getLayout(<Component {...pageProps} />)
          ) : (
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          )}
        </AnimatePresence>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
