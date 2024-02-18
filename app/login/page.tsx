
import { LogosGithubIcon } from "@/config/icons";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col space-y-10 lg:w-full">
            
            <p className="text-3xl font-bold">Log in to Asynmentor</p>


            <Link href={"/api/student/login/github"}>
                <Button
                    className="bg-gradient-to-l from-purple-700 to-purple-700 opacity-85 text-white shadow-lg"
                    size="lg"
                    radius="sm"
                    variant="flat"
                    startContent={<LogosGithubIcon />}
                    >
                    Continue with Github
                </Button>
            </Link>

        </div>
    )
}