import Link from "next/link";
import Header from "@/app/ui/header";

/**
 * Entry page for the entire web app.
 * @constructor
 */
export default function Home() {
  return (
      <>
        <Header isLandingHeader={true}/>
        <div className={'text-sky-500'}><Link href="/auth/login">Go to Login</Link></div>
        <div className={'text-sky-500'}><Link href="/auth/signup">Go to Sign Up</Link></div>
      </>
  );
}
