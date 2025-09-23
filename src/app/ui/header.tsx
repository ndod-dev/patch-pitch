import {jaro} from "@/app/fonts";

export default function Header() {
    return (
        <div className="flex flex-row w-full px-10 py-4 md:px-2 h-[90px] bg-linear-to-r from-[#6EBBEA] to-[#067AFF] text-white">
            <div>
                <h1 className={`${jaro.className}`}>Dashboard</h1>
            </div>
            <div className={`${jaro.className}`}>
                <div>user_name</div>
                <div>Image</div>
            </div>
        </div>
    );
}
