export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Asynmentor - A better way to send assignments.",
	description: "Simplify the way you send assignments to your students.",
	navItems: [
		{
			label: "Features",
			href: "/",
		},
		{
			label: "Blog",
			href: "/docs",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/EthanQuarry/connector-teacher-student",
		blog: "https://ethandev.me/blogs",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
