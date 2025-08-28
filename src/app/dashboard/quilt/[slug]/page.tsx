import Link from "next/link";

/**
 * Displays the patches contained in a specific quilt.
 * @constructor
 */
export default async function QuiltDisplay({params}: { params: Promise<{ slug: string }> }) {

    const {slug} = await params;
    
    return (
        <>
            <h1>Quilt</h1>
            <div className={'text-sky-500'}><Link href="/dashboard">Go to Dashboard</Link></div>
        </>
    );
}
