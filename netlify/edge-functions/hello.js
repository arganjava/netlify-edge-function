export default async (request, context) => {
  const body = await request.json();
  context.log("BODY", body);
    context.log("URL", request.url);
  return Response.json({ hello: "world" });
};
