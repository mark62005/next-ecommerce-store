import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MaxWidthContainerProps = {
	className?: string;
	children: ReactNode;
};

const MaxWidthContainer = ({ className, children }: MaxWidthContainerProps) => {
	return (
		<div
			className={cn(
				"w-full max-w-screen-xl mx-auto px-2.5 md:px-20",
				className
			)}
		>
			{children}
		</div>
	);
};

export default MaxWidthContainer;
