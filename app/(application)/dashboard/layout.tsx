import { Navbar } from "@/components/application/navbar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <Navbar />
        {children}
        </>
    )
}