import Link from "next/link";

/**
 * The login page. User accesses the dashboard after logging in from this page.
 * @constructor
 */
export default function LoginPage() {
    return (
        <div>
            <h1>Login Page</h1>
            <div className={'text-sky-500'}><Link href="/dashboard">Log In</Link></div>
            <div className={'text-sky-500'}><Link href="signup">Go to Sign Up</Link></div>
            <div className={'text-sky-500'}><Link href="/">Go to Landing</Link></div>
        </div>
    );
}