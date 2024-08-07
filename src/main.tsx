import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/router.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./pages/redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="mx-auto">
          <RouterProvider router={router} />
        </div>
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
