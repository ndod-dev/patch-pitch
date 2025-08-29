import Link from "next/link";

/**
 * The main page for a signed-in user.
 * @constructor
 */
export default function DashboardPage() {
    return (
        <>
            <h1>Dashboard Page</h1>
            <div className={'text-sky-500'}><Link href="dashboard/settings">Go to Settings</Link></div>
            <div className={'text-sky-500'}><Link href="auth/login">Sign Out</Link></div>
        </>
    );
}
