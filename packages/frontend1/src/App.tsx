import Content from "./Content";
import { OidcProvider } from "./oidc";

export default function App() {
  return (
    <OidcProvider>
      <Content />
    </OidcProvider>
  );
}
