# lerna-v3-travis

testing out travis with lerna v3

1. Run `npm run lerna:version` locally from your release branch. This would push your release to the branch on github.
2. Create a pull request from your branch to the `master` branch with your changes.
3. Once the changes are approved ensure you merge the changes and provide the commit message for the merge follows
   this convention otherwise the build with fail `chore(release) : 1.9.7`
4. Once this is merged to master a deployment would be initiated on the master branch
