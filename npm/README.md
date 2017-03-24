# npm

Going through `how-to-npm` tutorial.

```
npm help ............ Get help with npm
how-to-npm print .... Re-display the current exercise
how-to-npm verify ... Verify that you have finished an exercise
how-to-npm solution . Show the solution for the current exercise
```

* See who you're logged in as with `npm whoami`
* Create account with `npm adduser`
* Can create a new project with a scope using `npm init --scope=<username>` where `<username>` is what you used to set up your account via `npm adduser`
* One git repo for each project/module
* List all dependencies `npm ls`
	* If something shows `extraneous` it means you installed it without adding it as a dependency, aka forgot to do `--save` or `--save-dev`
* npm packages automatically come with a failing test when running `npm test`
	* `npm test` must exit without returning a failure or else the test fails
	* A blank `test.js` and running `npm test` with `node test.js` will thus pass
* Docs for scripts: `https://docs.npmjs.com/misc/scripts`
* When running `npm i` you will get a warning that there's no description if there's no `"description"` in `package.json` *and* there's no `README.md`. Having either of these will hide this warning
* Publishing to the world just needs you to run `npm publish`
* See details of a package with `npm view <package name>`
* npm uses semantic versioning (SemVer)

```
       1.2.3
       ^ ^ ^
       | | `-- Patch version. Update for every change.
       | `---- Minor version. Update for API additions.
       `------ Major version. Update for breaking API changes.
```

* Running `npm-version` will:
	* Change the update `"version"` in `package.json`
	* Commit changes (maybe? didn't see this happen)
* If you don't like this, change the `"version"` in `package.json` to what you'd like, then commit the changes
* npm registry will not let you publish to the same version number
* `npm help version` to get more info -- pretty slick API for this
* After changing the version with the above, run `npm publish`
* Every package has a `dist-tags` entry which maps strings to current versions, such as `"latest"` to the latest version (such as `1.2.48`)
* When downloading, you download the `"latest"`. When you publish, it automatically gets marked as `"latest"`
* If you don't want the next push to be downloaded as `"latest"`, then use `dist-tags` like: `npm dist-tag add <pkg>@<version> [<tag>]`
* Common to use tags such as `stable`, `beta`, `dev`
* The npm project uses the tag `next` to allow users to test out features before they're incorporated
* Can change the `latest` using `npm dist-tag add <package>@<older version> latest`
* `npm outdated` shows outdated packages
* You can update version numbers manually then run `npm i` or run `npm i <package>@<new version>` or to update all to max version you accept, run `npm update`