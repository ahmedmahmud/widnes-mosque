import type { PageServerLoad, Action, Actions } from './$types';
import type { Time } from '@prisma/client';

const get_time = (prayer_time: Time | undefined): string => {
  const date = prayer_time?.time;
  return date ? date.toTimeString().split(' ')[0].slice(0, -3) : '00:00';
};

export const load: PageServerLoad = async ({ locals }) => {
  console.log(get_time(locals.times.find((p) => p.name == 'fajr')));

  return {
    fajr: get_time(locals.times.find((p) => p.name == 'fajr')),
    dhur: get_time(locals.times.find((p) => p.name == 'dhur')),
    asr: get_time(locals.times.find((p) => p.name == 'asr')),
    isha: get_time(locals.times.find((p) => p.name == 'isha'))
  };
};
