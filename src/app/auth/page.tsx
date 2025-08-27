import Link from "next/link";

export default function AuthPage() {
    return (
        <div className={'text-sky-500'}><Link href="/login">Go back to Login</Link></div>
    );
}