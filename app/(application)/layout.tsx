import { Navbar } from "@/components/application/navbar";
import { getProfileImg } from "@/config/helpers/dbqueries";
import { validateRequest } from "@/auth";
import { Divider } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { SideBar } from "@/components/application/sidebar";


export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
    }
    const profileImg: string = await getProfileImg(user?.id);
    
    return (
        <div className="flex flex-row justify-start">
            <SideBar />            
            {/* <div className="md:left-[20%] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_40%_50%,_var(--tw-gradient-stops))] from-[#E400DA]  to-transparent absolute content-[''] blur-3xl opacity-20 z-[-1]"></div> */}

            {children}
        </div>
    )
}