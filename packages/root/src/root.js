import { registerApplication, start } from "single-spa";
import { constructRoutes, constructApplications, constructLayoutEngine } from "single-spa-layout";

import layout from "./layout.html?raw";

const routes = constructRoutes(layout);

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => import(/* @vite-ignore */ name),
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
