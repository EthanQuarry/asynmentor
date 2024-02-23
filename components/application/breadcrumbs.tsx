"use client"

import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { subtitle } from "../primitives";

export default function NavBreadCrumbs() {
    return (
        <>
            <Breadcrumbs>
                <BreadcrumbItem><div className="text-xl">Home</div></BreadcrumbItem>
                <BreadcrumbItem><h2 className={subtitle()}>Maths</h2></BreadcrumbItem>
            </Breadcrumbs>
        </>
    )
}