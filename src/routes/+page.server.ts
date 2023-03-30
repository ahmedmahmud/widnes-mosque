import type { PageServerLoad, Action, Actions } from './$types';
import type { Time } from '@prisma/client';

const get_time = (prayer_time: Time | undefined): string => {
  const date = prayer_time?.time;
  return date ? date.toTimeString().split(' ')[0].slice(0, -3) : '00:00';
};

export const load: PageServerLoad = (async ({ locals }) => {
  console.log(get_time(locals.times.find((p) => p.name == 'fajr')));

  const url = 'https://api.sunrise-sunset.org/json?lat=53.3781&lng=-2.7222&formatted=0';
  const response = await fetch(url);
  const data = await response.json();
  const sunsetTime = new Date(data.results.sunset);
  const hours = sunsetTime.getHours();
  const minutes = sunsetTime.getMinutes();

  return {
    fajr: get_time(locals.times.find((p) => p.name == 'fajr')),
    dhur: get_time(locals.times.find((p) => p.name == 'dhur')),
    asr: get_time(locals.times.find((p) => p.name == 'asr')),
    sunsetTime: `${hours}:${minutes}`,
    isha: get_time(locals.times.find((p) => p.name == 'isha'))
  };
}) satisfies PageServerLoad;
