import Link from "next/link";

/**
 * Displays the patches contained in a specific quilt.
 * @constructor
 */
export default function Quilt() {
    return (
        <>
            <h1>Quilt</h1>
            <div className={'text-sky-500'}><Link href="/dashboard">Go to Dashboard</Link></div>
        </>
    );
}
