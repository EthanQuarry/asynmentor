import { siteConfig } from "@/config/site";
import { title } from "../primitives";
import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { HealthIconsWeights, HealthiconsIExamMultipleChoice, GameIconsBarbute } from "@/config/icons"


const iconComponents: Record<string, React.ComponentType> = {
    HealthIconsWeights: HealthIconsWeights,
    HealthiconsIExamMultipleChoice: HealthiconsIExamMultipleChoice,
    GameIconsBarbute: GameIconsBarbute,
  };
  

  const renderIcon = (iconName: string): React.ReactElement | null => {
    const IconComponent = iconComponents[iconName];
    return IconComponent? <IconComponent /> : null;
  };

export function SideBar() {
    return (
        <div className="w-60 pt-8 mx-14 ">
            <div className="flex justify-left items-center pl-4 mb-6 gap-3">
                <h3 className={`inline-block opacity-80 ${title({ size: "sm" })}`}>{siteConfig.title}</h3>
                <Chip color="success" variant="bordered" size="sm">Beta</Chip>
            </div>

            <div className="flex flex-col space-y-4 mt-5">
                {siteConfig.application.options.map((item, index) => (
                    <Link
                        key={`${item}-${index}`}
                        href={item.url}
                        className="flex align-baseline items-center w-full text-md rounded-md opacity-90 hover:bg-gray-50/25 px-4 py-1 gap-3"
                    >
                        {renderIcon(item.icon)}
                        {item.title}

                    </Link>
                ))}
            </div>
        </div>
    )
}