export default async (request, context) => {
  context.log("BODY", request.body);
    context.log("URL", request.url);
  return Response.json({ hello: "world" });
};
