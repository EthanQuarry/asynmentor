"use client"

import { LogosGithubIcon, LogosGoogleIcon } from "@/config/icons"
import { Button } from "@nextui-org/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { LampContainer } from "../ui/lamp"
import { title } from "../primitives"

export function LoginComponent() {
    return (
        <div className="flex flex-col -space-y-24 rounded-full inset-0 ">
            <h2 className={`z-50 py-4 bg-gradient-to-br from-zinc-800 via-zinc-600 to-gray-100 py bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ${title()}`}>Login</h2>
            <LampContainer>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight md:text-7xl flex flex-col -space-y-4"
                >

                    <Button
                        className=" opacity-65 text text-lg w-full"
                        size="lg"
                        color="secondary"
                        radius="sm"
                        variant="shadow"
                        startContent={<LogosGithubIcon />}
                    >
                        <Link
                            href={"/api/student/login/github"}
                            className=""
                        >Continue with Github</Link>

                    </Button>

                    <Link href={"/api/student/login/google"}>
                        <Button
                            className=" opacity-85 shadow-lg w-full"
                            size="lg"
                            radius="sm"
                            variant="shadow"
                            color="primary"
                            startContent={<LogosGoogleIcon />}
                        >
                            Continue with Google
                        </Button>
                    </Link>
                </motion.div>
            </LampContainer>

        </div>
    )
}