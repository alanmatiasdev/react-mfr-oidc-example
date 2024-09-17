import { createReactOidc } from "oidc-spa/react";

export const { OidcProvider, getOidc, useOidc } = createReactOidc({
  clientId: "frontend",
  publicUrl: window.location.origin,
  issuerUri: "http://localhost:8080/realms/testing",
});
