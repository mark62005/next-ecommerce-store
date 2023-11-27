import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const appRouter = router({
	authCallback: publicProcedure.query(async () => {
		const { getUser } = getKindeServerSession();
		const user = await getUser();

		if (!user || !user.email) throw new TRPCError({ code: "UNAUTHORIZED" });

		// Check if user is in the database
		const dbUser = await db.user.findFirst({
			where: {
				id: user.id,
			},
		});
		// If not, create a new user in the database
		if (!dbUser) {
			await db.user.create({
				data: {
					id: user.id,
					email: user.email,
					firstName: user.given_name ?? "",
					lastName: user.family_name ?? "",
				},
			});
		}

		// If yes, return successful response
		return { success: true };
	}),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
