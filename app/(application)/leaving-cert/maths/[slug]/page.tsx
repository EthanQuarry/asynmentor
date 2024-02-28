import { maths } from "@/config/subjects";
import { getQuestions } from "@/config/helpers/dbqueries";
import Image from 'next/image'
import { NavbarBreadcrumbs } from "@/components/application/navbar-breadcrumbs";
import { Divider } from "@nextui-org/react";
import ImageRender from "./_Components/image-render";

export default async function Page({ params }: { params: { slug: string } }) {
    const list = maths.catagories
    for (const item of list) {
        if (item.url === params.slug) {

            const questions = await getQuestions(item.url)
            return (
                <div>
                    <NavbarBreadcrumbs />
                    <Divider />
                   <h1>{item.name}</h1>
                   <ImageRender questions={questions} />
                </div>
            )
        }
    }
    return (
        <div>Oops</div>
    )
}

