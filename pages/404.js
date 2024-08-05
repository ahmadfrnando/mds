import Link from "next/link";

export default function Custom404() {
  return (
    <div className="mt-36 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="mt-4 text-blue-500 hover:underline">Go back to home</a>
      </Link>
    </div>
  );
}
