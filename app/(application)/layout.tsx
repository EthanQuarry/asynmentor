import { Navbar } from "@/components/application/navbar";
import { getProfileImg } from "@/config/helpers/dbqueries";
import { validateRequest } from "@/auth";
import { Divider } from "@nextui-org/react";


export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user } = await validateRequest();
    const profileImg: string = await getProfileImg(user?.id);
    return (
        <>
            <Navbar profileImg={profileImg} />
            <Divider />
            {children}
            <div className="h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-purple-800 to-black absolute w-full content-[''] blur-2xl opacity-20 z-[-1]"></div>
        </>
    )
}