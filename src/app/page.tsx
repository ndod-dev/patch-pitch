import Link from "next/link";

/**
 * Entry page for the entire web app.
 * @constructor
 */
export default function Home() {
  return (
      <>
        <h1>Landing Page</h1>
        <div className={'text-sky-500'}><Link href="/auth/login">Go to Login</Link></div>
        <div className={'text-sky-500'}><Link href="/auth/signup">Go to Sign Up</Link></div>
      </>
  );
}
