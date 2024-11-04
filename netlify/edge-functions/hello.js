export default async (request: Request, context: Context) => {
  const body = await request.json();
  context.log("BODY", body);
    context.log("URL", request.url);
  return Response.json({ hello: "world" });
};
