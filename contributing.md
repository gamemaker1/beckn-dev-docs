# Contributing Guide

Thanks for your interest in contributing to the Beckn Developer Documentation!
This guide will show you how to set up your environment and contribute code to
this library.

## Set Up

First, you need to install and be familiar the following:

- `git`: [Here](https://github.com/git-guides) is a great guide by GitHub on
  installing and getting started with Git.
- `node` and `npm`:
  [This guide](https://nodejs.org/en/download/package-manager/) will help you
  install Node and npm. The recommended method is using the `n` version manager
  if you are on MacOS or Linux. Make sure you are using the
  [active LTS version](https://github.com/nodejs/Release#release-schedule) of
  Node.

Once you have installed the above, follow
[these instructions](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
to
[`fork`](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks)
and [`clone`](https://github.com/git-guides/git-clone) the repository
([`gamemaker1/beckn-dev-docs`](https://github.com/gamemaker1/beckn-dev-docs)).

Once you have forked and cloned the repository, you can
[pick out an issue](https://github.com/gamemaker1/beckn-dev-docs/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)
you want to fix/implement!

## Making Changes

Once you have cloned the repository to your computer (say, in
`~/Code/beckn-dev-docs`) and picked the issue you want to tackle, create a
branch:

```sh
> git switch -c branch-name
```

While naming your branch, try to follow the below guidelines:

1. Prefix the branch name with the type of change being made:
   - `fix`: For a bug fix.
   - `feat`: For a new feature.
   - `test`: For any change related to tests.
   - `perf`: For a performance related change.
   - `meta`: Anything related to the build process, workflows, issue templates,
     etc.
   - `refc`: For any refactoring work.
   - `docs`: For any documentation related changes.
2. Make the branch name short but self-explanatory.

Once you have created a branch, you can start coding!

The site has been created using [Gatsby](https://gatsbyjs.com) and is written in
[Typescript](https://github.com/microsoft/TypeScript#readme). The code is
arranged as follows:

```sh
beckn-dev-docs
.
├── config
│  └── husky
│     └── pre-commit
├── content
│  ├── overview
│  │  ├── index.md
│  │  └── ...
│  ├── examples
│  │  ├── index.md
│  │  └── ...
│  └── reference
│     ├── <version>
│     │  └── <domains>
│     │     └── ...
│     └── index.md
├── src
│  ├── assets
│  │  └── icon.png
│  ├── components
│  │  ├── header.tsx
│  │  ├── layout.tsx
│  │  └── sidebar.tsx
│  ├── gatsby
│  │  ├── create-pages.js
│  │  ├── on-create-node.js
│  │  └── util.js
│  ├── pages
│  │  ├── 404.tsx
│  │  ├── build-with-beckn.tsx
│  │  ├── index.tsx
│  │  └── projects.tsx
│  └── templates
│     └── index.tsx
├── types
│  └── gatsby-mdx.d.ts
├── contributing.md
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── license.md
├── package-lock.json
├── package.json
├── readme.md
└── tsconfig.json
```

> Most files have a little description of what they do at the top.

#### `./`

- `package.json`: Node package information.
- `package-lock.json`: npm lock file, please do not modify manually.
- `tsconfig.json`: The Typescript configuration for this project.
- `contributing.md`: This file, helps contributors get started.
- `license.md`: Tells people how they can use the code and the docs content.
- `readme.md`: Tells people about the project.

#### `src/`

- `src/gatsby/*.js`: Anything gastby-specific goes into this folder. This
  includes the code run during build-time processing of content.
- `src/pages/*.tsx`: All custom pages, e.g., 404 page, Build With Beckn page,
  Projects page, go inside this folder. The file name is the URL used to arrive
  at the page, e.g., if I name a file `404.tsx`, then going to the URL `/404`
  will show me the page rendered from the `404.tsx` file.
- `src/components/*.tsx`: All React components, like the navbar and sidebar live
  in this folder.
- `src/templates/index.tsx`: The default layout to render any page is the Layout
  component (`src/components/layout.tsx`), and the actual template react
  component that Gatsby renders is in this file.

#### `types/`

- `types/*.d.ts`: Contains type definitions used elsewhere in the code.

#### `config/`

- `config/husky/pre-commit`: The bash script to run just before someone runs
  `git commit`.

Modify the code as you please!

Once you have made your changes, please ensure the linter reports no errors and
the site builds without errors. You can run the linter using `npm run lint`,
build the site by running `npm run build` and try to automatically fix most lint
issues by running `npm run format`.

Once you have made changes to the code, you will want to
[`commit`](https://github.com/git-guides/git-commit) (basically, Git's version
of save) the changes. To commit the changes you have made locally:

```sh
> git add this/folder that/file
> git commit --message 'commit-message'
```

While writing the `commit-message`, try to follow the below guidelines:

1. Prefix the message with `type:`, where `type` is one of the following
   dependending on what the commit does:
   - `fix`: Introduces a bug fix.
   - `feat`: Adds a new feature.
   - `test`: Any change related to tests.
   - `perf`: Any performance related change.
   - `meta`: Any change related to the build process, workflows, issue
     templates, etc.
   - `refc`: Any refactoring work.
   - `docs`: Any documentation related changes.
2. Keep the first line brief, and less than 60 characters.
3. Try describing the change in detail in a new paragraph (double newline after
   the first line).

When you commit files, `husky` and `lint-staged` will automatically lint the
code and fix most issues. In case an error is not automatically fixable, they
will cancel the commit. Please fix the errors before committing the changes.

## Contributing Changes

Once you have committed your changes, you will want to
[`push`](https://github.com/git-guides/git-push) (basically, publish your
changes to GitHub) your commits. To push your changes to your fork:

```sh
> git push origin branch-name
```

If there are changes made to the `main` branch of the
`gamemaker1/beckn-dev-docs` repository, you may wish to
[`rebase`](https://docs.github.com/en/get-started/using-git/about-git-rebase)
your branch to include those changes. To rebase, or include the changes from the
`main` branch of the `gamemaker1/beckn-dev-docs` repository:

```
> git fetch upstream main
> git rebase upstream/main
```

This will automatically add the changes from `main` branch of the
`gamemaker1/beckn-dev-docs` repository to the current branch. If you encounter
any merge conflicts, follow
[this guide](https://docs.github.com/en/get-started/using-git/resolving-merge-conflicts-after-a-git-rebase)
to resolve them.

Once you have pushed your changes to your fork, follow
[these instructions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
to open a
[`pull request`](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests):

Once you have submitted a pull request, the maintainers of the repository will
review your pull requests. Whenever a maintainer reviews a pull request they may
request changes. These may be small, such as fixing a typo, or may involve
substantive changes. Such requests are intended to be helpful, but at times may
come across as abrupt or unhelpful, especially if they do not include concrete
suggestions on how to change them. Try not to be discouraged. If you feel that a
review is unfair, say so or seek the input of another project contributor. Often
such comments are the result of a reviewer having taken insufficient time to
review and are not ill-intended. Such difficulties can often be resolved with a
bit of patience. That said, reviewers should be expected to provide helpful
feedback.

In order to land, a pull request needs to be reviewed and approved by at least
one maintainer and pass CI. After that, if there are no objections from other
contributors, the pull request can be merged.

#### Congratulations and thanks for your contribution!
