
import { SidebarLargeScreen } from "./SidebarLargeScreen"
import { SidebarSmallScreen } from "./SidebarSmallScren"


export const SideBarAdmin = ()=>{
    return (
        <>
            {/* Si nous somme sur un ecran moyen une sidbar sort */}
            <aside className="min-h-screen z-10 bg-[#5D5FEF] pl-1 lg:pl-5 pt-4 hidden sm:block md:w-1/4">
                <div>
                    <h1 className="md:text-xl mb-9 lg:text-3xl text-white font-bold font-poppins">
                        TRANSIPASS CI
                    </h1>
                </div>
                <SidebarLargeScreen />
            </aside>
            {/* Si nous somme sur petit ecran */}
            <SidebarSmallScreen  />
        </>
    )
}