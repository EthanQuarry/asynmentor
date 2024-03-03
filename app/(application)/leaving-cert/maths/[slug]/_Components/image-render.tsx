
import { QuestionSections, Questions } from "@prisma/client";
import TextRecognition from "@/config/helpers/ocr";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface ImageRenderProps extends Questions {
    questionSections: QuestionSections[]
}

export async function ImageRender({ questions }: { questions: ImageRenderProps[] }) {
    const content = await fetch("http://localhost:3000/api/ocr", {
        method: "POST",
        body: JSON.stringify({ url: questions[0].questionSections[1].imageUrl }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const { text, completion } = await content.json()

    return (
        <>
            {questions.map((question, index) => {

                if (question.questionSections.length === 0) return (<div key={index} >No question sections</div>)

                return (

                    <div className="flex flex-col justify-center items-center w-full " key={index} >
                        <h2>{question.fullName}</h2>




                        <Card 
                        isBlurred
                        className="py-4 bg-[#330c3d] max-w-[750px]">
                            {question.questionSections.map((section, sectionIndex) => (
                                <div className="flex flex-col items-center justify-center space-y-5" key={sectionIndex}>
                                    <Image
                                        src={section.imageUrl}
                                        alt={`Question Section ${sectionIndex + 1}`}
                                        width={700}
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
