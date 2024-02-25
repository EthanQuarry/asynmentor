import { subtitle } from "@/components/primitives";
import { Button, Divider } from "@nextui-org/react";
import { maths } from "@/config/subjects";
import Link from "next/link";
export default function TopicNav() {
    return (
        <div className="flex flex-col">
            <h2 className={subtitle()}>Topics</h2>
            <Divider className="w-[80%] mb-4" />
            <div className="flex flex-col space-y-1 ">
                {maths.catagories.map((item, index) => {
                    return (

                        <Link key={index} href={`/leaving-cert/maths/${item.url}`}>
                            <Button variant="light" size="md" className="text-lg">{item.name}</Button>
                        </Link>

                    )
                })
                }
            </div>
        </div>
    )
}