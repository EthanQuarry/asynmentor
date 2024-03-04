import { maths } from "@/config/subjects";
import { getQuestions } from "@/config/helpers/dbqueries";
import { NavbarBreadcrumbs } from "@/components/application/navbar-breadcrumbs";
import { Divider } from "@nextui-org/react";
import { QuestionContainer } from "./_Components/question-container";

export default async function Page({ params }: { params: { slug: string } }) {

    const list = maths.catagories
    for (const item of list) {
        if (item.url === params.slug) {

            const questions = await getQuestions(item.url)
            return (
                <div className="w-full flex flex-col justify-center  text-center">
                    <NavbarBreadcrumbs />
                    <Divider />
                    <div className="">
                        <h1>{item.name}</h1>
                    </div>


                    <QuestionContainer questions={questions} />
                </div>
            )
        }
    }
    return (
        <div>Oops</div>
    )
}

