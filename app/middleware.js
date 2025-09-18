import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    "/",
    "/innogyanschool",
    "/innogyancollege", 
    "/innogyanplaybox",
    "/sign-in",
    "/sign-up",
    "/api/webhook(.*)",
  ],
  // Routes that should redirect to sign-in if not authenticated
  ignoredRoutes: [
    "/api/webhook(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
