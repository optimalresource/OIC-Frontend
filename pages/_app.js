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
import NextProgress from "next-progress";
import { Toaster } from "react-hot-toast";

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
          <div className="mainWrapper">
            <div className="mainContainer">
              <NextProgress color="#009fe3" height={5} />
              <Toaster position="top-center" reverseOrder={false} />
              {Component.getLayout ? (
                Component.getLayout(<Component {...pageProps} />)
              ) : (
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              )}
            </div>
          </div>
        </AnimatePresence>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
