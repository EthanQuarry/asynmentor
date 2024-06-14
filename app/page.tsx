import { LandingComponentOne, LandingComponentThree, LandingComponentTwo } from "@/components/home";
import { Navbar } from "@/components/navbar";
import { Spotlight } from "@/components/ui/Spotlight";



export default function Home() {

	return (
		<>
			{/* <div className="from-purple-500 via-purple-800 to-black absolute w-full content-['']  blur-2xl opacity-20  h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] z-[-1]"></div> */}
			<div className="relative flex flex-col h-screen dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
				<Spotlight
					className="-top-40 left-0 md:left-20 md:-top-20"
					fill="white"
				/>
				<Navbar />
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

				<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
					<LandingComponentOne />
					<LandingComponentTwo />
					<LandingComponentThree />
				</main>
				<footer className="w-full flex items-center justify-center py-3">

				</footer>
			</div>

		</>
	);
}
