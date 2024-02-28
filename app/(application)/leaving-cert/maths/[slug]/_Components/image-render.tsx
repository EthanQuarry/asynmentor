import { QuestionSections, Questions } from "@prisma/client";
import Image from "next/image";

interface ImageRenderProps extends Questions {
    questionSections: QuestionSections[]
}

export default async function ImageRender({ questions }: { questions: ImageRenderProps[] }) {
    return (
        <>
                    {questions.map((question, index) => {
                        if (question.questionSections.length === 0) return (<div key={index} >No question sections</div>)
                        else if (question.questionSections.length == 2) return (
                            <div key={index} >
                                <h2>{question.fullName}</h2>

                                <div className="flex flex-col space-y-5">
                                    <Image
                                        src={question.questionSections[0].imageUrl}
                                        alt="Question Sections"
                                        width={500}
                                        height={500}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAB7CAAAewgFu0HU+AAEAAElEQVR4nOzdeXhUZf7/8e9"
                                    />

                                    <Image
                                        src={question.questionSections[1].imageUrl}
                                        alt="Question Sections"
                                        width={500}
                                        height={500}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAB7CAAAewgFu0HU+AAEAAElEQVR4nOzdeXhUZf7/8e9"
                                    />
                                </div>
                            </div>
                        )

                        else if (question.questionSections.length == 3) return (
                            <div key={index} >
                                <h2>{question.fullName}</h2>

                                <div className="flex flex-col space-y-5">
                                    <Image
                                        src={question.questionSections[0].imageUrl}
                                        alt="Question Sections"
                                        width={500}
                                        height={500}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAB7CAAAewgFu0HU+AAEAAElEQVR4nOzdeXhUZf7/8e9"
                                    />

                                    <Image
                                        src={question.questionSections[1].imageUrl}
                                        alt="Question Sections"
                                        width={500}
                                        height={500}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAB7CAAAewgFu0HU+AAEAAElEQVR4nOzdeXhUZf7/8e9"
                                    />

                                    <Image
                                        src={question.questionSections[2].imageUrl}
                                        alt="Question Sections"
                                        width={500}
                                        height={500}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAB7CAAAewgFu0HU+AAEAAElEQVR4nOzdeXhUZf7/8e9"
                                    />
                                </div>
                            </div>
                        )

                        else return (
                            <div key={index} >
                                <h2>{question.fullName}</h2>
                                <Image
                                    src={question.questionSections[0].imageUrl}
                                    alt="Question Sections"
                                    width={500}
                                    height={500}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAB7CAAAewgFu0HU+AAEAAElEQVR4nOzdeXhUZf7/8e9"
                                />
                            </div>
                        )
                    })}
                    </>
    )
} 
