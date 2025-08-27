import Link from "next/link";

export default function SettingsPage(){
    return (
        <>
            <h1>Settings Page</h1>
            <div className={'text-sky-500'}><Link href="/dashboard">Go to Dashboard</Link></div>
        </>
    );
}
