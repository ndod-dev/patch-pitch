import Link from "next/link";

/**
 * Page that routes to the display for a specific quilt (see [slug]/page.tsx).
 * @constructor
 */
export default function QuiltPage() {
    return (
        <>
            <h1>Quilt Page</h1>
            <div className={'text-sky-500'}><Link href="/dashboard">Go to Dash</Link></div>
            <div className={'text-sky-500'}><Link href="auth/login">Sign Out</Link></div>
        </>
    );
}
