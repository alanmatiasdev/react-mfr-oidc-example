import { createReactOidc } from "oidc-spa/react";

export const { OidcProvider, getOidc, useOidc } = createReactOidc({
  isAuthGloballyRequired: true,
  clientId: "example-tanstack-router",
  publicUrl: window.location.origin,
  issuerUri: "https://cloud-iam.oidc-spa.dev/realms/oidc-spa",
});
