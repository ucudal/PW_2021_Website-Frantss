import Alpine from 'https://cdn.skypack.dev/alpinejs';

import { getExperience } from './api.js';
import { buildWorkingPeriod } from './utils.js';

window.Alpine = Alpine;

const main = async () => {
  const experience = await getExperience();

  Alpine.data('experience', () => ({
    experience: experience.map(exp => ({
      ...exp,
      date: buildWorkingPeriod(exp.startedAt, exp.endedAt),
    })),
  }));

  Alpine.start();
};

(async () => await main())();
