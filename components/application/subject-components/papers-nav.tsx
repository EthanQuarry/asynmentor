"use client"

import { subtitle } from "@/components/primitives";
import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";
import { maths } from "@/config/subjects";
import Link from "next/link";
export default function PaperNav() {

    return (
        <div className="flex flex-col">
            <h2 className={subtitle()}>Papers</h2>
            <Divider className="w-full" />

            <Accordion className="flex flex-col md:ml-4 ">
                {maths.paper.map((paper, index) => {
                    return (
                        <AccordionItem key={index} title={paper.year} aria-label={`Exam paper ${paper.year}`} className="flex flex-col">
                            <div className="flex flex-row">
                                <Link href={`${paper.paperOne?.exam}`} target="_blank">
                                    <Button variant="light" className="text-lg">Paper One</Button>
                                </Link>
                                <Link href={`${paper.paperOne?.exam}`} target="_blank">
                                    <Button variant="light" className="text-lg">Marking Scheme</Button>
                                </Link>
                            </div>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}