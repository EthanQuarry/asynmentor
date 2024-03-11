import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { button as buttonStyles } from "@nextui-org/theme";
import { link as linkStyles } from "@nextui-org/theme";
import {Chip} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	SearchIcon,
} from "@/components/icons";
import { Button } from "@nextui-org/button";

export const Navbar = () => {

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

				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
					<Link
                        href={"/login"}
                    >
                        <Button
                            className={buttonStyles({ color: "primary", variant: "ghost", size: "md", radius: "sm"})}
                        >
                            Get Started For Free
                        </Button>
                    </Link>
				</NavbarItem>

			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
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
