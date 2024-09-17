import Header from "./Header";
import { OidcProvider } from "./oidc";

export default function App() {
  return (
    <OidcProvider>
      <Header />
    </OidcProvider>
  );
}
