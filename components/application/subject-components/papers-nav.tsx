import { subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/react";

export default function PaperNav() {
    return (
        <div className="flex flex-col">
        <h2 className={subtitle()}>Papers</h2>
        <Divider className="w-full" />
        </div>
    )
}