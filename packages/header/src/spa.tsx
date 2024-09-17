import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import singleSpaReact from "single-spa-react";

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(err: any, _info: any, _props: any) {
    return <div>Error: {err}</div>;
  },
});
