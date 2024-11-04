export default async (request, context) => {
  context.log("Calling hello.js edge function", request);

  return new Response({ hello: "world" }, {
    headers: { "content-type": "application/json" }
  });
};
