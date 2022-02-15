# [Rentaflop Landing Page](https://rentaflop.com)

## Setup

Set up your dev environment by installing yarn. Once yarn is installed, run the following to install
all dependencies:
```
yarn install
```

## Development Workflow

**Coding**

Make changes to the repo on the master branch. Most changes will need to happen under ```src/```.
After you've made a change, you can view the site on localhost by running the command ```yarn start```.
If you keep yarn running, it will automatically update the local site with any new changes made to
```src/```. As always, don't forget to commit and ```git push``` your code when finished.

**Deployment**

After you've made your desired changes, you're ready to deploy to the live production site.
Simply run ```yarn deploy```. This will build the js code and push the contents of ```build/```
to the repo under the gh-pages branch. This branch is configured to hold the live site contents by
github pages, so any changes will go into production.
