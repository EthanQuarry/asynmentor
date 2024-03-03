
import { QuestionSections, Questions } from "@prisma/client";
import TextRecognition from "@/config/helpers/ocr";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface ImageRenderProps extends Questions {
    questionSections: QuestionSections[]
}

export async function ImageRender({ questions }: { questions: ImageRenderProps[] }) {
    const content = await fetch("http://localhost:3000/api")
    const { text } = await content.json()

    return (
        <>
            {questions.map((question, index) => {

                if (question.questionSections.length === 0) return (<div key={index} >No question sections</div>)

                return (

                    <div className="flex flex-col justify-center items-center w-full " key={index} >
                        <h2>{question.fullName}</h2>




                        <Card className="py-4">
                            {question.questionSections.map((section, sectionIndex) => (
                                <div className="flex flex-col items-center justify-center space-y-5" key={sectionIndex}>
                                    <Image
                                        src={section.imageUrl}
                                        alt={`Question Section ${sectionIndex + 1}`}
                                        width={500}
                                        height={500}
                                        placeholder="blur"
                                    />
                                    <CardBody>
                                        <TextRecognition text={text} />
                                    </CardBody>

                                </div>
                            ))}
                        </Card>
                    </div>
                )
            })}
        </>
    )
} 
