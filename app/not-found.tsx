import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">404</div>
            <h2>Page not found.</h2>
          </div>
          <p>The page you are looking for doesn&rsquo;t exist or has moved.</p>
        </div>
        <Link className="btn btn-primary" href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
