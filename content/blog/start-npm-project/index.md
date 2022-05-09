---
title: How To Start npm Project?
date: "2022-05-03T22:12:03.284Z"
description: "A lot of developers use npm for their projects. Npm is so useful feature for programmers. So how to install npm on your machine? How to packages?"
tags: ["npm", "nodejs", "webdevelopment"]
canonical: "https://blog.devmoek.com/how-to-start-npm-project"
---

## Step 1. Install Node.js

If you don’t have Node.js on you computer [install Node.js from the official website](https://nodejs.org/en/). Why we need Node.js? It’s simple. We need Node.js because npm is a separate project from Node.js. Simply, without Node.js you can’t get npm in your project.
![node.js official website](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mzbvcg3rp686xiksra0i.png)

If you already have a Node.js on your computer check the version:

```
node -v
```

So check the npm version to verify you have the latest version:
```
npm -v
```

## Step 2. Create a project folder
If you don’t have a project folder at this step it’s time to create it. In the next steps you will work with your project folder. You can use terminal to create a folder. All you need to do is enter this command in your terminal:

```
mkdir folder-name
```

To verify that you created a folder run this:

```
ls
```

Also, you can use the basic way to create a folder. Maybe in the future I’ll write an article about terminal and how it can save your time just ‘running’ in computer directories.

## Step 3. Launch npm
If you start you project from scratch and don’t have a package.json file run this command in your project:

```
npm init --yes
```
It will create a basic package.json file in your project folder:
![nodejs installation successful message](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8rqu7vrm06otq1akwdli.png)

## Step 4. Install npm packages
After we installed npm let’s install some packages. All dependencies install by command `npm install` or in a short way `npm i`.

```
npm i eslint --save-dev --save-exact
```
We installed eslint in our project. But what the weird words with dashes?

## Step 5. Terminal command keys
What is `--save-dev` and `--save-exact` ?
The most terminal commands have additional settings. This settings called command keys.
`--save-dev` and `--save-exact` are the specifying commands. The are need it to clarify how to install the package.

`--save-dev` key will install the package in devDependencies section in a `package.json` file. If you will forget this key your package will be installed in dependencies section. It’s no problem but there is a logical split: 

> devDependencies packages is need it for development, dependencies packages is need it for app working.

`--save-exact` key is saying to install exact version of the package (usually more newer). If you will forget this key your package will be install with `^` sign. That means “every version from and higher”. It’s okay, but if several developer will be working on your project, they in 90% will have a different version of packages. That will be the issue.

Some keys have a short way, one hyphen and initial letter. For example, `-D` is the same that `--save-dev` or `-E` the same that `--save-exact`

```
npm i eslint -D -E 
```

The pros of short way is combining them and -D -Ewill be -DE

```
npm i eslint -DE 
```

So the order is not important. You can type -ED too.

## Step 6. npm i events
**After we installed a first package in our project we can see some events:**

`package-lock.json` will be formatted in your project directory. This file contains version history of our dependencies. If you already have dependencies in your project the `package-lock.json` file will be updated. You have to commit it in your GitHub repository.

There will be created a new block in your `package.json` file called devDependencies(or updated).

And you can see a new folder in your project called `node_modules`. You don’t have to commit it. Why? Because all packages are stored in `package.json` file and after you open your project in a new computer or if you pull the repository from GitHub all you will need to do is install your packages by run `npm i` in terminal. All your packages will be installed instantly. That’s AWESOME!

Package.json have a special section called `scripts`. In this section you can set different scripts for launching.

```js
{
  "scripts": {
    "lint": "eslint"
  }
}
```

In this example we have lint script that will launch eslint in our project:

```
npm run lint
```

What this command do? It will launch eslint package in Node.js workspace. The ESLint is the program that analyzes your JavaScript code to find a problems.

## Overall
In this article we learned how to start npm from scratch in our future projects. And we are understood how to install packages, how to setting them up, what we need to commit and what is better to add in `.gitignore` file. Thank you for reading this article.
