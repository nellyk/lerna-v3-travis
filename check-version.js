

var exec = require('child_process').exec;
const regex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/gm;
const commitMessage = process.env.TRAVIS_COMMIT_MESSAGE;
if (commitMessage != null && regex.test(commitMessage)){
    child = exec('npm run lerna:publish').stderr.pipe(process.stderr);
};