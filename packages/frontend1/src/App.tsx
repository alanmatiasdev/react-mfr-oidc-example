import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <p>Hello world from frontend1</p>
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
