import Link from "next/link";

export default function QuiltPage() {
    return (
        <>
            <h1>Quilt Page</h1>
            <div className={'text-sky-500'}><Link href="/dashboard">Go to Dash</Link></div>
            <div className={'text-sky-500'}><Link href="auth/login">Sign Out</Link></div>
        </>
    );
}
