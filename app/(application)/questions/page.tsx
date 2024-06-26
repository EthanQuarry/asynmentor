import { redirect } from "next/navigation";
import { validateRequest } from "@/auth";
import { Container } from "@/components/application/subject-components/container";

export default async function Page() {
    const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
    }
    return (
        <>
            <Container>
                <h1>Questions</h1>
            </Container>
        </>
    )
}