import { maths} from "@/config/subjects";

export default function Page({ params }: { params: { slug: string } }) {
    const list = maths.catagories
    for (const item of list) {
        if (item.url === params.slug) {
            return (
                <div>
                    <h1>{item.name}</h1>
                </div>
            )
    }
}
    return (
        <div>Oops</div>
    )
  }

