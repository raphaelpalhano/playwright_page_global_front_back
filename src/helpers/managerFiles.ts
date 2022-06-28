// eslint-disable-next-line @typescript-eslint/no-var-requires
const rimraf = require('rimraf');
export const removeFiles = (path: string) => {
  rimraf.sync(path);
};
