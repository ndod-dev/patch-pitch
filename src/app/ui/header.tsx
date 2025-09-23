import {jaro} from "@/app/fonts";

export default function Header() {
    return (
        <div className="flex flex-row w-full px-6 py-4 h-[90px] bg-linear-to-r from-patch-blue-secondary to-patch-blue-primary text-white place-content-between">
            <div>
                <h1 className={`${jaro.className}`}>Dashboard</h1>
            </div>
            <div className={`flex flex-row ${jaro.className} place-content-around`}>
                <div><p>user_name</p></div>
                <div><p>Image</p></div>
            </div>
        </div>
    );
}
