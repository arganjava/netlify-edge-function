export default async (request, context) => {
  context.log("Calling hello.js edge function");

  return new Response({ hello: "world" }, {
    headers: { "content-type": "text/html" }
  });
};
