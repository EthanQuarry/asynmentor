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
	application: {
		options: [
			{
				id: 1,
				title: "Quiz (Easy)",
				icon: "HealthIconsWeights",
				url: "/learn",
			},
			{
				id: 2,
				title: "Coming soon 1",
				icon: "HealthiconsIExamMultipleChoice",
				url: "/test",
			},
			{
				id: 3,
				title: "Coming soon 2",
				icon: "GameIconsBarbute",
				url: "/test",
			},
			{
				id: 4,
				title: "Coming soon 3",
				icon: "",
				url: "/test",
			},
			{	id: 5,
				title: "Coming soon 4",
				icon: "",
				url: "/test",
			},
			{
				id: 6,
				title: "Coming soon 5",
				icon: "",
				url: "/test",
			},
		]
	}
};
