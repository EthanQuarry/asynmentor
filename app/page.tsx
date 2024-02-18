import { LandingComponentOne, LandingComponentTwo } from "@/components/home";
import { Navbar } from "@/components/navbar";



export default function Home() {

	return (
		<>
			<div className="from-purple-500 via-purple-800 to-black absolute w-full content-['']  blur-2xl opacity-20  h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] z-[-1]"></div>
			<div className="relative flex flex-col h-screen">
				<Navbar />
				<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
					<LandingComponentOne />
					<LandingComponentTwo />
				</main>
				<footer className="w-full flex items-center justify-center py-3">

				</footer>
			</div>

		</>
	);
}
