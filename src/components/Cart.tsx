"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { formatPrice } from "@/lib/utils";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetFooter,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";

const Cart = () => {
	const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0);
	const [transactionFee, setTransactionFee] = useState<number>(1);
	const [totalFee, setTotalFee] = useState<number>(1);

	return (
		<Sheet>
			<SheetTrigger className="group -m-2 p-2 flex items-center">
				<ShoppingCart
					className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
					aria-hidden="true"
				/>
				<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
					{numberOfItemsInCart}
				</span>
			</SheetTrigger>

			<SheetContent className="w-full pr-0 flex flex-col sm:max-w-lg">
				<SheetHeader className="space-y-2.5 pr-6">
					<SheetTitle>{`Cart (${numberOfItemsInCart})`}</SheetTitle>
				</SheetHeader>

				{numberOfItemsInCart > 0 ? (
					<>
						<div className="w-full pr-6 flex flex-col">
							{/* TODO: Cart logic */}
							Cart Items
						</div>

						<div className="space-y-4 pr-6">
							<Separator />
							{/* Fees */}
							<div className="space-y-1.5 text-sm">
								<div className="flex">
									<span className="flex-1">Shipping</span>
									<span>Free</span>
								</div>
								<div className="flex">
									<span className="flex-1">Transaction Fee</span>
									<span>{formatPrice(transactionFee)}</span>
								</div>
								<div className="flex">
									<span className="flex-1">Total</span>
									<span>{formatPrice(totalFee)}</span>
								</div>
							</div>

							<SheetFooter>
								<SheetTrigger asChild>
									<Link
										href="/cart"
										className={buttonVariants({
											className: "w-full",
										})}
									>
										Continue to Checkout
									</Link>
								</SheetTrigger>
							</SheetFooter>
						</div>
					</>
				) : (
					<div className="h-full flex flex-col justify-center items-center space-y-2">
						<div className="relative mb-4 h-60 w-60 text-muted-foreground">
							<Image
								src="/empty-cart.jpg"
								alt="Designed by rawpixel.com / Freepik"
								fill
							/>
						</div>

						<div className="text-xl font-semibold">Your cart is empty</div>
						<SheetTrigger asChild>
							<Link
								href="/products"
								className={buttonVariants({
									variant: "secondary",
									size: "sm",
									className: "text-sm",
								})}
							>
								Add items to your cart
							</Link>
						</SheetTrigger>
					</div>
				)}
			</SheetContent>
		</Sheet>
	);
};
export default Cart;
