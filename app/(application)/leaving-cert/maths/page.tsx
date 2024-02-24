// TODO: This inefficient, insert header content into layout and get data from url path

import React from "react";
import { Divider } from "@nextui-org/react";
import { NavbarBreadcrumbs } from "@/components/application/navbar-breadcrumbs";
import TopicNav from "@/components/application/subject-components/topics-nav";
import PaperNav from "@/components/application/subject-components/papers-nav";

export default function Page() {
    return (
        <>
            <div className="">
                <NavbarBreadcrumbs />
                <Divider />
                <div className="grid md:grid-cols-[400px_minmax(900px,_1fr)_200px] md:mt-4 md:gap-4 md:px-12 xs:grid-cols-1">
                    <TopicNav />
                    <PaperNav />
                </div>
            </div>

        </>
    )
}