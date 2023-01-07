export const load = async ({ fetch }) => {
  const getPosts = async () => {
    const res = await fetch("/api/posts.json");
    const data = await res.json();
    return data;
  };

  return {
    posts: getPosts(),
  };
};
