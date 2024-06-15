"use client"

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { FadeInFromTopTwo, FadeInOnScrollOne, FadeInOnScrollLeft, DelayAnimation } from "./animations";
import { Button } from "@nextui-org/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundBeams } from "@/components/ui/background-beams";

const people = [
    {
        id: 1,
        name: "Harry",
        designation: "Cheekslayer3000",
        image:
            "https://instagram.fdub8-1.fna.fbcdn.net/v/t51.2885-19/272378588_305767064939446_4086726875858988288_n.jpg?_nc_ht=instagram.fdub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=0o-rSGtmKm0Q7kNvgH-T9Ed&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYB_5DCZFP-6IN8S4vYjHitlxmrKhL8dLAxj4GveEs28Ig&oe=66728CD0&_nc_sid=cf751b",
    },
    {
        id: 2,
        name: "Ethan",
        designation: "Minerman264ed",
        image:
            "https://instagram.fdub8-1.fna.fbcdn.net/v/t51.2885-19/272327566_311053114313854_8444724879371177430_n.jpg?_nc_ht=instagram.fdub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=bDND9YwECf4Q7kNvgHuWixQ&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBpwNDsdhUiGaBwY0ZxVE3fRGfnRipzbqsA2AeaW4pTpA&oe=66725D08&_nc_sid=cf751b",
    },
    {
        id: 3,
        name: "Rowan",
        designation: "Billyscannell04",
        image: "https://instagram.fdub8-1.fna.fbcdn.net/v/t51.2885-19/118681130_179255743640788_8498340252062262413_n.jpg?_nc_ht=instagram.fdub8-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Utppg8HdnQwQ7kNvgElbeoR&edm=APHcPcMBAAAA&ccb=7-5&oh=00_AYAh8TBp857WFOhf21jI851kTPQR6Io30O-1aGsh6VIelw&oe=66726B80&_nc_sid=cf751b",
    },
    {
        id: 4,
        name: "Real Person",
        designation: "Real Job",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];


export function LandingComponentOne() {
    return (
        <section id="main" className="flex flex-col items-center justify-center py-8 md:py-10 lg:py-16 ">
            <div className="flex flex-row text-center justify-center w-full">

                <div className="w-1/2 flex flex-col text-center justify-center">

                    <h1 className={`font-georgia flex flex-row justify-left text-center ${title()}`}>

                        <TextGenerateEffect words={"Do you... "} timing={0.5} />
                        <DelayAnimation delay={1}>
                            <TextGenerateEffect words={"stink at studying?"} timing={.7} />
                        </DelayAnimation>

                    </h1>
                    <br />
                    <h2 className={`text-left ${subtitle({ class: "mt-4" })}`}>
                        <DelayAnimation delay={2}>
                            <TextGenerateEffect words={'Do you feel unmotivated when you try to study?'} timing={.2} />
                        </DelayAnimation>
                        <DelayAnimation delay={3}>
                            <TextGenerateEffect words={'Do your parents nag you about summer tests?'} timing={.2} />
                        </DelayAnimation>
                        <DelayAnimation delay={4}>
                            <TextGenerateEffect words={"Me too, that's why I made this"} timing={.2} />
                        </DelayAnimation>


                        <br />
                        {/* <i className="inline-block text-transparent font-semibold bg-gradient-to-r bg-clip-text from-[#FF1CF7] to-[#b249f8]">Asynmentor</i> allows you to <i className="font-semibold">learn</i>, <i className="font-semibold">understand</i> and <i className="font-semibold">test</i> yourself, <i className="font-semibold">quickly</i>. */}
                    </h2>


                    <Link
                        className="w-min"
                        href={"/login"}
                    >
                        <DelayAnimation delay={4}>
                            <Button
                                className={` ${buttonStyles({ color: "primary", variant: "shadow", size: "lg", radius: "sm" })} opacity-90 `}
                            >
                                Get Started
                            </Button>
                        </DelayAnimation>
                    </Link>

                    <div className="flex flex-row items-center justify-start my-10 w-full space-x-5 ">
                        <div className="flex flex-row items-center justify-start">
                            <AnimatedTooltip items={people} />
                        </div>
                        <div className="flex flex-col justify-center opacity-100 relative">
                            <span className="justify-start">⭐⭐⭐⭐⭐</span>
                            <span className="justify-start pl-8">From 201+ reviews</span>
                        </div>
                    </div>

                </div>

                <div className="w-1/2">
                    <FadeInFromTopTwo>
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold opacity-90 dark:text-white"
                                >
                                    We all know the LC is horrible.
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    So I made it fun, like Clash of Clans
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src="https://wallpapercave.com/wp/wp1808773.jpg"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-5">
                                </div>
                            </CardBody>
                        </CardContainer>
                    </FadeInFromTopTwo>
                </div>


            </div>

        </section>
    )
}

export function LandingComponentTwo() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10 my-12">
             <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 py-4 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-semibold">
          Also, you can make money.
        </h1>
        <p></p>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Yeah, basically your parents support us with a monthly subscription probably because they are invested in your future (although if they don&apos;t we got you!). Then, the more you study and compete against your peers, the more of that subscription money you will earn back. Pretty much a win - win situation.
        </p>
      </div>
      <BackgroundBeams />
    </div>
            {/* <div className="flex flex-row w-full">
                <div className=" flex justify-left w-1/2">
                    <div className={`flex flex-row justify-center text-center ${title()}`}>I can make money?</div>
                </div>
                <div className=" flex justify-left w-1/2">
                    <div className={`flex flex-row justify-center text-center ${subtitle()}`}>Basically your parents support us with a monthly subscription because they are invested in your future. Then, the more you study and compete against your peers, the more of that subscription money you will earn back. Pretty much a win - win situation.</div>
                </div>
            </div> */}
            
            <MacbookScroll
                title={
                    <span>
                        Money for study?? <br /> Its fr.
                    </span>
                }
                src={`https://wallpapercave.com/wp/wp2180554.jpg`}
                showGradient={false}
            />
        </section>
    )
}

export function LandingComponentThree() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10">

            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    )
}

const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

