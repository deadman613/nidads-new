import Link from "next/link";
import "./not-found.css";

export const metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__signal" aria-hidden="true">
        <span className="not-found__orbit not-found__orbit--one" />
        <span className="not-found__orbit not-found__orbit--two" />
        <span className="not-found__core">404</span>
      </div>

      <div className="not-found__copy">
        <p className="not-found__eyebrow">Signal lost</p>
        <h1 id="not-found-title">This page went off the map.</h1>
        <p>
          The address may be outdated, or the page may have moved. Let&apos;s get
          you back to something useful.
        </p>
        <Link className="not-found__action" href="/">
          Return home
          <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </main>
  );
}
