## Release process

`yarn auto changelog`

After the command has run, navigate to the CHANGELOG.md file.
A new entry should have been added for recent commits.
Edit if necessary, otherwise proceed with next steps.

`git add CHANGELOG.md`

`git commit -m "Changelog for vX.X.X"` (Where X is the relevant version)

`npm version X.X.X -m "Bump version to: %s"` (Where X is the relevant version)

`npm publish`

`git push --follow-tags origin master`

`yarn auto release`