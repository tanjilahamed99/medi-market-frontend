"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

interface ProviderConProps {
  children: ReactNode;
}

const ProviderCon: React.FC<ProviderConProps> = ({ children }) => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default ProviderCon;
