import { redirect } from "next/navigation";
import { validateRequest } from "@/auth";
import { LoginComponent } from "@/components/application/login";

export default async function Page() {
    const { user } = await validateRequest();
    if (user) {
        return redirect("/quiz");
    }
    return (
        <div className="flex flex-col lg:w-full">
        <LoginComponent />
        </div>
    )
}