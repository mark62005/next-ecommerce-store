"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = () => {
	const router = useRouter();

	const searchParams = useSearchParams();
	const origin = searchParams.get("origin");

	const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
		onSuccess: ({ success }) => {
			if (success) {
				// user has been synced to db
				router.push(origin ? `/${origin}` : "/products");
			}
		},
		onError: (err) => {
			if (err.data?.code === "UNAUTHORIZED") {
				router.push("/sign-in");
			}
		},
	});

	return (
		<div>
			<div className="">Auth Callback</div>
		</div>
	);
};
export default Page;
