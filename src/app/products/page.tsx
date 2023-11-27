import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user || !user.id) redirect("/auth-callback?origin=products");

	return (
		<div>
			Products
			<div className="">{user?.email}</div>
		</div>
	);
};
export default page;
