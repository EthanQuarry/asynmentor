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
    else return ""
}