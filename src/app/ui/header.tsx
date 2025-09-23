import {jaro} from "@/app/fonts";

export default function Header() {
    return (
        <div className="flex flex-row w-full px-6 py-4 h-[90px] bg-linear-to-r place-content-between from-patch-blue-secondary to-patch-blue-primary text-white">
            <div>
                <h1 className={`${jaro.className}`}>Dashboard</h1>
            </div>
            <div className={`flex flex-row place-content-around gap-5 ${jaro.className} py-4`}>
                <div><p>patch_user_name</p></div>
                <div><p>ImageButton</p></div>
            </div>
        </div>
    );
}
