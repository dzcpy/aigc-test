import { dreamRouter } from "~/server/api/routers/dream";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  dream: dreamRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
