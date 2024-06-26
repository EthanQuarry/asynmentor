export type SiteConfig = typeof siteConfig;

export const subjectConfig = {
	subjects: [
		{
			title: "Maths",
			questions: [],
			quiz: [],
		},
		{
			title: "Physics",
			questions: [],
			quiz: [],
		},
		{
			title: "Computer Science",
			questions: [],
			quiz: [],
		},
		{
			title: "Applied Maths",
			questions: [],
			quiz: [],
		},
		{
			title: "Economics",
			questions: [],
			quiz: [],
		},
	]
}

export const siteConfig = {
	name: "StudyPoo - The Revolutionary Study Tool.",
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
				title: "Quiz",
				icon: "HealthIconsWeights",
				url: "/quiz",
			},
			{
				id: 2,
				title: "Questions (AI powered)",
				icon: "HealthiconsIExamMultipleChoice",
				url: "/questions",
			},
			{
				id: 3,
				title: "Leaderboard",
				icon: "PhShieldDuotone",
				url: "/leaderboard",
			},
			{
				id: 4,
				title: "",
				icon: "",
				url: "/",
			},
			{	id: 5,
				title: "",
				icon: "",
				url: "/",
			},
			{
				id: 6,
				title: "",
				icon: "",
				url: "/",
			},
		]
	}
};
