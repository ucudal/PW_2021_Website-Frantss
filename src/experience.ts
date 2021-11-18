import Alpine from 'https://cdn.skypack.dev/alpinejs';

import { getExperience } from './api.js';
import { buildWorkingPeriod } from './utils.js';

import * as navbar from './navbar.js';
import * as alpine from './alpine.js';

const main = async () => {
  const experience = await getExperience();

  Alpine.data('experience-data', () => ({
    experience: experience.map(exp => ({
      ...exp,
      date: buildWorkingPeriod(exp.startedAt, exp.endedAt),
    })),
  }));

  navbar.setup();
  alpine.setup();
};

(async () => await main())();
