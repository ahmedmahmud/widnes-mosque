import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Action, Actions } from './$types';
import { db } from '$lib/database';
import type { Time } from '@prisma/client';

const get_time = (prayer_time: Time | undefined): string => {
  const time = prayer_time?.time;
  return time ? time : '--:--';
};

export const load: PageServerLoad = async ({ locals }) => {
  // redirect user if not logged in
  if (!locals.user) {
    throw redirect(302, '/login');
  }

  return {
    fajr: get_time(locals.times.find((p) => p.name == 'fajr')),
    dhur: get_time(locals.times.find((p) => p.name == 'dhur')),
    asr: get_time(locals.times.find((p) => p.name == 'asr')),
    isha: get_time(locals.times.find((p) => p.name == 'isha')),
    jummah: get_time(locals.times.find((p) => p.name == 'jummah'))
  };
};

const change_time: Action = async ({ locals, request }) => {
  const data = await request.formData();

  interface prayer_time {
    name: string;
    time: FormDataEntryValue | null;
  }

  const times: prayer_time[] = ['fajr', 'dhur', 'asr', 'isha', 'jummah'].map((p) => ({
    name: p,
    time: data.get(p)
  }));

  for (const prayer of times) {
    if (prayer.time && typeof prayer.time === 'string') {
      await db.time.update({
        where: {
          name: prayer.name
        },
        data: {
          time: prayer.time
        }
      });
    }
  }

  locals.times = await db.time.findMany();
};

export const actions: Actions = { change_time };
