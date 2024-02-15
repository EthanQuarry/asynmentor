"use client"

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { FadeInFromTopOne, FadeInFromTopTwo } from "./animations";

export default function HomeComponent() {
    return (
        <section id="main" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

            <div className="inline-block max-w-lg text-center justify-center">
                <FadeInFromTopOne>
                    <h1 className={title({ color: "violet" })}>
                        Asynmentor,
                    </h1>
                    <br />
                    <h1 className={title()}>
                        The <i>Revolutionary</i> Study Tool
                    </h1>
                </FadeInFromTopOne>
                <br />
                <FadeInFromTopTwo>
                    <h2 className={subtitle({ class: "mt-4" })}>
                        Utilising the latest technology to help you study smarter, not harder.
                    </h2>
                </FadeInFromTopTwo>

            </div>


            <div className="flex gap-3">
                <Link
                    href={"/auth/students/login"}
                    className={buttonStyles({ color: "primary", variant: "bordered" })}
                >
                    <b>Get Started for Free</b>
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({ variant: "light" })}
                    href={siteConfig.links.blog}
                >

                    <b>How I made this →</b>
                </Link>
            </div>
        </section>
    )
}