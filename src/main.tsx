import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StoreProvider } from 'easy-peasy'
import store from "./store/index.store.ts";
import { App as KonstaApp, Button, KonstaProvider } from 'konsta/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <KonstaApp>
        {/* <Button className="inline-block w-10 h-10 bg-slate-500">asdfasdf</Button> */}
        <RouterProvider router={router} />
      </KonstaApp>
    </StoreProvider>
  </React.StrictMode>,
)
