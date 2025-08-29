import Link from "next/link";

/**
 * The account creation page. Sign the user in after successfully creating an account.
 * @constructor
 */
export default function SignUpPage() {
    return (
        <div>
            <h1>Sign Up Page</h1>

            <div className={'text-sky-500'}><Link href="login">Go to Log In</Link></div>
            <div className={'text-sky-500'}><Link href="/">Go to Landing</Link></div>
        </div>
    );
}