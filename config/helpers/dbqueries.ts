import { db } from "@/config/db";


export const getProfileImg = async (username: string | undefined) => {
    const user = await db.user.findUnique({
        where: {
            username: username
        }
    })
    if (user && user.profile_img) {
        return user.profile_img
    }
    else return ""
}