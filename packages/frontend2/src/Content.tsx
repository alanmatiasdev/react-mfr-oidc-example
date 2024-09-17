import Header from "./Header";

export default function Content() {
  return (
    <>
      <Header />
      <main>
        <p>Hello world from frontend2</p>
        <ul className="list-disc mt-5">
          <li>
            <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              go to frontend1 (same tab)
            </a>
          </li>
          <li>
            <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
              go to frontend1 (another tab)
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
