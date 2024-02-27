import { db } from "@/config/db";


export const getProfileImg = async (id: string | undefined) => {
    const user = await db.user.findUnique({
        where: {
            id: id
        }
    })
    if (user && user.profile_img) {
        return user.profile_img
    }
    else return "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F251659%2Fprofile&psig=AOvVaw22Qjh-Mmyqu9kXJqqGhCBg&ust=1708956814294000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDavrDWxoQDFQAAAAAdAAAAABAE"
}

export const getQuestions = async (subject: string) => {
    const questions = await db.questions.findMany({
        where: {
            subject: subject
        },
        include: {
            questionSections: true,
            markingSchemeSections: true
        }
    })
    if (questions) {
        return questions
    }
    else return []
}