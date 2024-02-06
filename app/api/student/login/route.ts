import { db } from "@/config/db";
import { UserTypes } from "@/types";
import bcrypt from "bcrypt";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const { email, password } = data as UserTypes;

  if (email != "" && password != "") {
    const student = await db.student.findUnique({
      where: {
        email: email
      }
    });
    if (student) {
      const match = student.password === password;
      if (match) {
        return new Response('Login successful', { status: 200 })
      } else {
        return new Response('Incorrect Password or Email.', { status: 401 })
      }
    } else {
      return new Response('Login failed', { status: 401 })
    }
  }


}