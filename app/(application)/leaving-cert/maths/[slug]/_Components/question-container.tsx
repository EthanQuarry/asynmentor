
"use client"

import { QuestionSections, Questions } from "@prisma/client";
import { Card, CardBody, Image, ModalBody, Button, Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { TextContainer } from "./text-container";
import { useState } from "react";

interface ImageRenderProps extends Questions {
    questionSections: QuestionSections[]
}


// TODO: Complete refactor of this component and sub component to match system design

export function QuestionContainer({ questions }: { questions: ImageRenderProps[] }) {
    const [openModalId, setOpenModalId] = useState<null | string>(null);

    const handleOpenModal = (id: string) => setOpenModalId(id);
    const handleCloseModal = () => setOpenModalId(null);
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
                            {question.questionSections.map((section, sectionIndex) => {
                                const uniqueId = section.imageUrl
                                return (
                                    <div className="flex flex-col items-center justify-center space-y-5" key={sectionIndex}>
                                    <Image
                                        src={section.imageUrl}
                                        alt={`Question Section ${sectionIndex + 1}`}
                                        width={700}
                                        height={500}
                                        placeholder="blur"
                                    />
                                    <CardBody>
                                        <Button variant="bordered" onPress={() => handleOpenModal(uniqueId)}>Answer</Button>
                                        <Modal
                                            size="full"
                                            isOpen={openModalId === uniqueId} 
                                            onClose={handleCloseModal}
                                            classNames={{
                                                body: "py-6",
                                                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                                                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                                                header: "border-b-[1px] border-[#292f46]",
                                                footer: "border-t-[1px] border-[#292f46]",
                                                closeButton: "hover:bg-white/5 active:bg-white/10",
                                              }}
                                        >
                                            <ModalContent>
                                                {(onClose) => (
                                                    <>
                                                        <ModalHeader className="flex flex-col gap-1">{section.index}</ModalHeader>
                                                        <ModalBody>
                                                        <TextContainer url={section.imageUrl} isActive={openModalId === uniqueId}/>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Button color="danger" variant="light" onPress={onClose}>
                                                                Close
                                                            </Button>
                                                            <Button color="primary" onPress={onClose}>
                                                                Action
                                                            </Button>
                                                        </ModalFooter>
                                                    </>
                                                )}
                                            </ModalContent>
                                        </Modal>
                                        
                                    </CardBody>

                                </div>
                                )
                            })}
                        </Card>
                    </div>
                )
            })}
        </>
    )
} 
