import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MaxWidthContainer from "./MaxWidthContainer";
import NavItems from "./NavItems";
import Cart from "./Cart";

const Navbar = () => {
	const user = null;

	return (
		<header className="bg-white sticky z-50 top-0 inset-x-0 h-16">
			<div className="relative bg-white">
				<MaxWidthContainer>
					<div className="border-b border-gray-200">
						<div className="h-16 flex items-center">
							{/* Left side */}
							{/* Logo */}
							<div className="ml-4 flex lg:ml-0">
								<Link
									href="/"
									className="text-xl font-bold"
								>
									LOGO
								</Link>
							</div>

							<div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
								<NavItems />
							</div>

							{/* Right side */}
							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:justify-between lg:items-center lg:space-x-4">
									{user ? null : (
										<Link
											href="/sign-in"
											className={buttonVariants({
												variant: "ghost",
											})}
										>
											Sign In
										</Link>
									)}

									{user ? (
										<div className=""></div>
									) : (
										<Link
											href="/register"
											className={buttonVariants({
												variant: "ghost",
											})}
										>
											Create an Account
										</Link>
									)}

									<div className="ml-4 flow-root">
										<Cart />
									</div>
								</div>
							</div>

							{/* TODO: Mobile Nav */}
						</div>
					</div>
				</MaxWidthContainer>
			</div>
		</header>
	);
};
export default Navbar;
