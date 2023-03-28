import { d as db } from "./database.js";
const handle = async ({ event, resolve }) => {
  event.locals.times = await db.time.findMany();
  const session = event.cookies.get("session");
  if (!session) {
    return await resolve(event);
  }
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { username: true }
  });
  if (user) {
    event.locals.user = {
      name: user.username
    };
  }
  return await resolve(event);
};
export {
  handle
};
