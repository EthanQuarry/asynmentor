import { Navbar } from "@/components/application/navbar";
import { getProfileImg } from "@/config/helpers/dbqueries";
import { validateRequest } from "@/auth";


export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user } = await validateRequest();
    const profileImg: string = await getProfileImg(user?.username);
    return (
        <>
            <Navbar profileImg={profileImg} />
            {children}
        </>
    )
}