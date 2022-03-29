import { Link } from "remix";

export default function Index() {
  return (
    <div className="m-5">
      <h1 className="text-xl">Welcome to Remix</h1>
      <ul className="list-disc">
        <li className="text-blue-600 underline">
          <Link
            to="/docs"
          >
            ETUI Documents
          </Link>
        </li>
        <li className="text-blue-600 underline">
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li className="text-blue-600 underline">
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li className="text-blue-600 underline">
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
