import { Navbar } from "@/components/navbar";

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>

			<div className="relative flex flex-col h-screen">
				<Navbar />
				<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
					<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 text-center">
							{children}

					</section>
				</main>
				<footer className="w-full flex items-center justify-center py-3">

				</footer>
			</div>
		</>

	);
}