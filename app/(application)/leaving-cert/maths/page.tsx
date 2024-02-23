// TODO: This inefficient, insert header content into layout and get data from url path

import React from "react";
import { Divider } from "@nextui-org/react";
import { NavbarBreadcrumbs } from "@/components/application/navbar-breadcrumbs";

export default function Page() {
    return (
        <>
            <div className="">
                <NavbarBreadcrumbs />
                <Divider />
            </div>

        </>
    )
}