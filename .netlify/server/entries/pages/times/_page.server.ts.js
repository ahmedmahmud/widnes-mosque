import { r as redirect } from "../../../chunks/index.js";
import { d as db } from "../../../chunks/database.js";
const get_time = (prayer_time) => {
  const date = prayer_time?.time;
  return date ? date.toTimeString().split(" ")[0].slice(0, -3) : "00:00";
};
const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, "/login");
  }
  console.log(get_time(locals.times.find((p) => p.name == "fajr")));
  return {
    fajr: get_time(locals.times.find((p) => p.name == "fajr")),
    dhur: get_time(locals.times.find((p) => p.name == "dhur")),
    asr: get_time(locals.times.find((p) => p.name == "asr")),
    isha: get_time(locals.times.find((p) => p.name == "isha"))
  };
};
const change_time = async ({ locals, request }) => {
  const data = await request.formData();
  const times = ["fajr", "dhur", "asr", "isha"].map((p) => ({
    name: p,
    time: data.get(p)
  }));
  for (const prayer of times) {
    if (prayer.time && typeof prayer.time === "string") {
      const split_time = prayer.time.split(":");
      const time = /* @__PURE__ */ new Date();
      time.setHours(+split_time[0]);
      time.setMinutes(+split_time[1]);
      console.log(prayer.name, time);
      await db.time.update({
        where: {
          name: prayer.name
        },
        data: {
          time
        }
      });
    }
  }
  locals.times = await db.time.findMany();
};
const actions = { change_time };
export {
  actions,
  load
};
