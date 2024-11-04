export default async (req: Request, context: Context) => {
  const body = await req.json();
  return context.next(new Request(req, { body: JSON.stringify(body) }));
};

