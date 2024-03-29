import type { PageServerLoad, Action, Actions } from './$types';
import type { Time } from '@prisma/client';

const get_time = (prayer_time: Time | undefined): string => {
  const time = prayer_time?.time;
  return time ? time : '--:--';
};

export const load: PageServerLoad = (async ({ locals }) => {
  const url = 'https://api.sunrise-sunset.org/json?lat=53.3781&lng=-2.7222&formatted=0';
  const response = await fetch(url);
  const data = await response.json();
  const sunset = new Date(data.results.sunset);

  return {
    fajr: get_time(locals.times.find((p) => p.name == 'fajr')),
    dhur: get_time(locals.times.find((p) => p.name == 'dhur')),
    asr: get_time(locals.times.find((p) => p.name == 'asr')),
    sunset,
    isha: get_time(locals.times.find((p) => p.name == 'isha')),
    jummah: get_time(locals.times.find((p) => p.name == 'jummah'))
  };
}) satisfies PageServerLoad;
