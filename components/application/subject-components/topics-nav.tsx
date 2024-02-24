import { subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/react";

export default function TopicNav() {
    return (
        <div className="flex flex-col">
            <h2 className={subtitle()}>Topics</h2>
            <Divider className="w-[80%]" />
        </div>
    )
}