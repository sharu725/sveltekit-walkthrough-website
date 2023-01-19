/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const userSetTheme = event.url.searchParams.get("theme");
  if (userSetTheme) {
    event.cookies.set("siteTheme", userSetTheme);
  }

  const theme = event.cookies.get("siteTheme");

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace('data-theme=""', `data-theme="${theme}"`);
    },
  });
  return response;
};
