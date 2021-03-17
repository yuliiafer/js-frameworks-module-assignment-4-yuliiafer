import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <div className="container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/results">Results</Link>
          <Link href="/about-us">About Us</Link>
        </div>
      </nav>
      <div className="background">{} </div>
      <div className="container">{children}</div>
    </>
  );
}
