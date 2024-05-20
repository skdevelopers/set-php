const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const phpVersion = core.getInput('php-version');
    const extensions = core.getInput('extensions').split(',').map(ext => ext.trim());
    const iniValues = core.getInput('ini-values').split('\n').map(val => val.trim());

    await exec.exec(`sudo apt-get update`);
    await exec.exec(`sudo apt-get install -y software-properties-common`);
    await exec.exec(`sudo add-apt-repository -y ppa:ondrej/php`);
    await exec.exec(`sudo apt-get update`);
    await exec.exec(`sudo apt-get install -y php${phpVersion}`);

    for (const extension of extensions) {
      await exec.exec(`sudo apt-get install -y php${phpVersion}-${extension}`);
    }

    for (const iniValue of iniValues) {
      await exec.exec(`echo "${iniValue}" | sudo tee -a /etc/php/${phpVersion}/cli/php.ini`);
    }

    core.addPath(`/usr/bin/php${phpVersion}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
