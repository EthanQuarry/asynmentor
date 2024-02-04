import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Simplify&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Assignments,&nbsp;</h1>
				<br />
				<h1 className={title()}>
					By Actually Helping Students&nbsp;
					<h1 className={title({ color: "violet" })}>Learn&nbsp;</h1>
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Nothing makes a teacher happier than a student who is actually learning.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					href={"/application/login"}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Get Started
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.blog}
				>
					
					How I made this →
				</Link>
			</div>
		</section>
	);
}
