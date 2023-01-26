/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies }) => {
    cookies.set("access", "true");
  },
};
