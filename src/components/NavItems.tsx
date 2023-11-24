"use client";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside.ts";

import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "./NavItem";

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const navRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(navRef, () => setActiveIndex(null));

	useEffect(() => {
		const escHandler = (e: KeyboardEvent) => {
			if (e.key === "Escape") setActiveIndex(null);
		};
		document.addEventListener("keydown", escHandler);

		return () => {
			document.removeEventListener("keydown", escHandler);
		};
	}, []);

	const isAnyOpen = activeIndex !== null;

	return (
		<div
			ref={navRef}
			className="flex gap-4 h-full"
		>
			{PRODUCT_CATEGORIES.map((category, index) => {
				const handleOpen = () => {
					if (activeIndex === index) {
						setActiveIndex(null);
					} else {
						setActiveIndex(index);
					}
				};

				const isOpen = index === activeIndex;

				return (
					<NavItem
						key={index}
						category={category}
						isOpen={isOpen}
						isAnyOpen={isAnyOpen}
						handleOpen={handleOpen}
					/>
				);
			})}
		</div>
	);
};
export default NavItems;
