export const buildWorkingPeriod = (startedAt, endedAt) => {
    const started = new Date(startedAt);
    if (!endedAt)
        return `${buildWorkingDate(started)} - Present`;
    const ended = new Date(endedAt);
    return `${buildWorkingDate(started)} - ${buildWorkingDate(ended)}`;
};
const buildWorkingDate = (date) => `${date.getMonth()}/${date.getFullYear().toString().slice(2)}`;
//# sourceMappingURL=utils.js.map