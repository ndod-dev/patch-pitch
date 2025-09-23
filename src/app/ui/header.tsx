import {jaro} from "@/app/fonts";

/**
 * Properties for the header component.
 *  @param {boolean} isLandingHeader - Should this component render the landing variant instead?
 */
type HeaderProps = {
    isLandingHeader: boolean
}

/**
 * Display and navigation header component. This component comprises both landing and navigation header variants.
 * @constructor
 * @param props - Config props for the Header component.
 */
export default function Header(props?: HeaderProps) {
    const {isLandingHeader} = props ? props : false;
    
    if (isLandingHeader) {
        return (
            <div
                className="flex flex-row place-content-center w-full px-6 py-4 h-[90px] bg-linear-to-r place-content-between from-patch-blue-secondary to-patch-blue-primary text-white">
                <div>
                    <h1 className={`${jaro.className}`}>Patch Pitch</h1>
                </div>
            </div>
        );
    }
    
    return (
        <div
            className="flex flex-row w-full px-6 py-4 h-[90px] bg-linear-to-r place-content-between from-patch-blue-secondary to-patch-blue-primary text-white">
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
