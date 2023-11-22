import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import MaxWidthContainer from "../MaxWidthContainer";

const perks = [
	{
		name: "Instant Delivery",
		Icon: ArrowDownToLine,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore maxime cum.",
	},
	{
		name: "Guaranteed Quality",
		Icon: CheckCircle,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore maxime cum.",
	},
	{
		name: "For the Planet",
		Icon: Leaf,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore maxime cum.",
	},
];

const PerksSection = () => {
	return (
		<section className="border-t border-gray-200 bg-gray-50">
			<MaxWidthContainer className="py-20">
				<div
					className="
            grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 
            lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0
          "
				>
					{perks.map((perk) => (
						<div
							key={perk.name}
							className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
						>
							{/* Icon */}
							<div className="md:flex-shrink-0 flex justify-center">
								<div className="h-16 w-16 flex justify-center items-center rounded-full bg-blue-100 text-blue-900">
									{<perk.Icon className="w-1/3 h-1/3" />}
								</div>
							</div>

							{/* Description */}
							<div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
								<h3 className="text-base font-medium text-gray-900">
									{perk.name}
								</h3>
								<p className="mt-3 text-sm text-muted-foreground">
									{perk.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</MaxWidthContainer>
		</section>
	);
};
export default PerksSection;
