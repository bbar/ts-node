# ts-node

Completely stripped down [node.js](https://nodejs.org/) project that supports [TypeScript](https://www.typescriptlang.org/).

### Usage
Clone this project, then point it at your own remote repository.
```
$ git clone git@github.com:bbar/ts-node.git some-project
$ cd some-project
$ npm i
$ git remote set-url origin git@github.com:user/some-project.git
$ git push -u origin master
```