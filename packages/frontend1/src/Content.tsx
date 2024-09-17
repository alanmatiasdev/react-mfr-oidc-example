import Header from "./Header";
import { useOidc } from "./oidc";

export default function Content() {
  const { oidcTokens } = useOidc();
  const user = oidcTokens?.decodedIdToken as { email?: string };

  return (
    <>
      <Header />
      <main>
        {user ? <p>Hello, {user.email}</p> : <p>Hello world from frontend1</p>}
        <ul className="list-disc mt-5">
          <li>
            <a href="/frontend-2" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              go to frontend2 (same tab)
            </a>
          </li>
          <li>
            <a href="/frontend-2" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
              go to frontend2 (another tab)
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
