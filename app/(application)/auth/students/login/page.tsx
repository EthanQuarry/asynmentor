import { FadeInFromTop } from "@/components/animations"
import { Authentication } from "@/components/authentication"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Login",
    description: "Login page for students",

}

const componentData = {

}

export default function Login() {
    return (
        <div className="flex items-center justify-center h-full">
            <FadeInFromTop>
                <Authentication />
            </FadeInFromTop>
        </div>
     
    )       
}