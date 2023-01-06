export const GET = async () => {
  const text = "hello";

  return new Response(String(text));
};
