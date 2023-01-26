import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const access = event.cookies.get("access") === "true";

  if (!access && event.route.id?.startsWith("/(app)")) {
    throw redirect(302, "/login");
  }

  const theme = event.cookies.get("siteTheme");

  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('data-theme=""', `data-theme="${theme}"`),
  });
  return response;
};
