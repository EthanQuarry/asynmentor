"use client"

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { FadeInFromTopOne, FadeInFromTopTwo, FadeInFromTopThree, FadeInOnScrollOne, FadeInOnScrollLeft } from "./animations";
import { Button } from "@nextui-org/button";

export function LandingComponentOne() {
    return (
        <section id="main" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

            <div className="inline-block max-w-lg text-center justify-center">
                <FadeInFromTopOne>
                    <h1 className={title({ color: "violet" })}>
                        <i>Asynmentor,</i>
                    </h1>
                    <br />
                    <h1 className={title()}>
                        The <i>New</i> Study Tool
                    </h1>
                </FadeInFromTopOne>
                <br />
                <FadeInFromTopTwo>
                    <h2 className={subtitle({ class: "mt-4" })}>
                        For Leaving Cert students who don&apos;t have time to study.
                        <br />
                        <i className="inline-block text-transparent font-semibold bg-gradient-to-r bg-clip-text from-[#FF1CF7] to-[#b249f8]">Asynmentor</i> allows you to <i className="font-semibold">learn</i>, <i className="font-semibold">understand</i> and <i className="font-semibold">test</i> yourself, <i className="font-semibold">quickly</i>.
                    </h2>
                </FadeInFromTopTwo>

            </div>

            <FadeInFromTopThree>
                <div className="flex flex-col">
                    <Link
                        href={"/login"}
                    >
                        <Button
                            className={buttonStyles({ color: "primary", variant: "ghost", size: "lg", radius: "sm"})}
                        >
                            Get Started For Free
                        </Button>
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({ variant: "light" })}
                        href={siteConfig.links.blog}
                    >

                        <b className="opacity-40">How I made this →</b>
                    </Link>
                </div>
            </FadeInFromTopThree>
        </section>
    )
}

export function LandingComponentTwo() {
    return (
        <section className="min-h-screen flex flex-col items-start justify-center gap-4 py-8 md:py-10">

            <div className="inline-block max-w-lg text-center justify-center">
                <FadeInOnScrollOne>

                    <h1 className={title()}>
                        &quot;Why use us?&quot;
                    </h1>
                </FadeInOnScrollOne>
                <br />
                <FadeInOnScrollLeft>
                    <h2 className={subtitle({ class: "mt-4" })}>
                        We use <b>machine learning</b> and <b>AI</b> to scan previous exam material to produce the highest quality practice questions, and <i>answers</i>.
                    </h2>
                </FadeInOnScrollLeft>

            </div>
        </section>
    )
}