import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer";
import { Button, buttonVariants } from "../ui/button";

const HeroSection = () => {
	return (
		<MaxWidthContainer>
			<div className="max-w-3xl py-20 mx-auto text-center flex flex-col items-center">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Your marketplace for high quality{" "}
					<span className="text-blue-600">digital assets</span>.
				</h1>

				<p className="mt-6 text-xl max-w-prose text-muted-foreground">
					Welcome to Ecommerce Store. Lorem ipsum dolor sit amet consectetur
					adipisicing elit cum ipsam omnis adipisci ducimus.
				</p>

				<div className="flex flex-col gap-4 mt-6 sm:flex-row">
					<Link
						href="/products"
						className={buttonVariants()}
					>
						Browse Trending
					</Link>
					<Button variant="outline">Our quality promise &rarr;</Button>
				</div>
			</div>
		</MaxWidthContainer>
	);
};
export default HeroSection;
