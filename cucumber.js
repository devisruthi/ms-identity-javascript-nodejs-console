let common = [
  'bin/features/**/*.feature',
  '--require bin/step-definitions/**/*steps.js',
  '--format progress-bar'
].join(' ');

module.exports = {
  default: common,
  // More profiles can be added if desired
};
