import { maths} from "@/config/subjects";
import { getQuestions } from "@/config/helpers/dbqueries";
import Image from 'next/image'

export default async function Page({ params }: { params: { slug: string } }) {
    const list = maths.catagories
    for (const item of list) {
        if (item.url === params.slug) {

            const questions = await getQuestions(item.url)
            return (
                <div>
                    <h1>{item.name}</h1>
                    <h1>hello</h1>
                    {questions.map((question, index) => {
                        return (
                            <div key={index} >
                                <h2>{question.fullName}</h2>
                                <Image
                                    src={question.questionSections[0].imageUrl}
                                    alt="Question Sections"
                                    width={500}
                                    height={500}
                                  />  
                            </div>
                        )
                    })}
                </div>
            )
    }
}
    return (
        <div>Oops</div>
    )
  }

