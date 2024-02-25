import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon
} from "@/components/icons";
import { Avatar, Chip } from "@nextui-org/react"




export const Navbar = ({profileImg}: {profileImg: string}) => {
	return (
		<NextUINavbar style={{
			background: "rgba(0, 0, 0, 0)",
			backdropFilter: "blur(10px)",
			borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
		}} maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
				<NextLink className="flex justify-start items-center gap-1" href="/">
						
						<i className="inline-block text-transparent font-semibold bg-gradient-to-r bg-clip-text from-[#FF1CF7] to-[#b249f8]">Asynmentor</i>
						</NextLink>
						<Chip color="success" variant="bordered" size="sm">Beta</Chip>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>

				<NavbarItem className="hidden sm:flex gap-2">
                <Avatar isBordered src={profileImg} />
				</NavbarItem>

			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 1
										? "primary"
										: "foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
