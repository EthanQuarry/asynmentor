"use client"

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
import { button as buttonStyles } from "@nextui-org/theme";
import { link as linkStyles } from "@nextui-org/theme";
import {Chip} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/button";
import { title } from "./primitives";
import { useEffect, useState } from "react";


export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
	  const showNavbarBlur = window.scrollY > 50; // Adjust threshold as needed
	  setIsScrolled(showNavbarBlur);
	};
  
	useEffect(() => {
	  window.addEventListener('scroll', handleScroll);
	  return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<NextUINavbar style={{
			background: "rgba(0, 0, 0, 0)",
			borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
		}} maxWidth="xl" position="sticky" isBlurred={isScrolled}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						
					<h3 className={`inline-block opacity-80 ${title({ size: "sm" })}`}>{siteConfig.title}</h3>
					</NextLink>
					<Chip color="success" variant="bordered" size="sm">Beta</Chip>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="center"
			>

				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles(),
									"data-[active=true]:text-primary data-[active=true]:font-bold"
								)}
								color="foreground"
								href={item.href}
							>
								<div className="font-semibold opacity-80">{item.label}</div>
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					
					<Link
                        href={"/login"}
                    >
                        <Button
                            className={` ${buttonStyles({ color: "primary", variant: "shadow", size: "md", radius: "md" })} opacity-90 `}
                        >
                            Get Started For Free
                        </Button>
                    </Link>
					<ThemeSwitch />
				</NavbarItem>

			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				{/* <ThemeSwitch /> */}
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
