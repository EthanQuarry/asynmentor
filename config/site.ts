export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Asynmentor - The Revolutionary Study Tool.",
	title: "StudyPoo",
	description: "Utilising the latest technology to help you study smarter, not harder.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Login",
			href: "/login",
		},
	],
	navMenuItems: [
{
			label: "Home",
			href: "/",
		},
		{
			label: "Login",
			href: "/login",
		},
		{
			label: "Pricing",	
			href: "/pricing",
		},

	],
	links: {
		github: "https://github.com/EthanQuarry/connector-teacher-student",
		blog: "https://ethandev.me/blogs",
		docs: "https://nextui.org",
	},
};
