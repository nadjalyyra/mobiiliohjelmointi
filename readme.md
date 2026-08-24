# Setting up your Expo project

Welcome to the mobile programming course! In this exercise, you will create a new Expo project, connect it to this repository, and push your code to GitHub.

Unlike typical GitHub classroom exercises, this one **does not** start by cloning a remote repository. Instead, you will create a new Expo project and a Git repository locally, and push it to this remote repository after completing the steps in this readme file.


## 1. Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js (lts or later)](https://nodejs.org/)
- [Git](https://git-scm.com/)

You will also need either an Android or iOS device/emulator to run your Expo app.


## 2. Create a new Expo project

The [getting started documentation](https://docs.expo.dev/get-started/introduction/) provides a comprehensive guide to setting up your Expo project. Use the documentation as a reference.

A new project can be created on the command line with the [`create-expo-app` command line tool](https://docs.expo.dev/more/create-expo/). Execute the following command in the folder, where you want to create a new project:

```sh
npx create-expo-app@latest
```

The command will prompt you to name your app and choose a template. After the selections are made, the file structure for your project will be created automatically in a new subfolder. Change into that directory:

```sh
cd my-app-name
```

Expo also automatically initializes a new Git repository in your project and creates an initial commit. You can check the initial status of your repository with:

```sh
git status
git log
```


## 3. Run the app on a device or emulator

To run your new Expo app, you can use either a physical device or an emulator.

The Expo docs contain instructions about [how to set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/) with either a physical device or an emulator.

Follow the instructions on your project's readme file and verify that you are able to run the project locally and see changes in the source code reflected in the running application.


## 4. Add the current repository as the remote

Although your new Expo project has a local Git repository, it is not connected to a remote repository. You need to connect it to this repository to be able to push your changes.

First, verify that you do not have an existing remote:

```sh
# this lists existing remotes, which should be empty
git remote -v
```

Then, add the URL of this repository as the new remote. Replace `<REPO_URL>` with the actual URL of this repository, which you can find in GitHub under the green `<> Code` button.

```sh
git remote add origin <REPO_URL>
```

Now, `git remote -v` should show the new remote repository, which should also include your GitHub username.


## 5. Prepare your commit

Add any changes in the project to version control using the familiar `git status`, `git add` and `git commit` commands.

When you have committed your changes, you can proceed to push them to the remote repository.


## 6. Push your repository to GitHub

The final step to do in this exercise is to push the changes to the remote repository. As you have created the repository locally, Git does not know which local branch you want to push to which remote branch.

Therefore, you need to specify the upstream branch with the `-u` flag:

```sh
# pushes the changes to the remote repository, and sets the upstream branch
git push -u origin master

# later, you can omit the `-u origin master`, as it has already been set
git push
```

In the previous command, we expect the local branch to be named `master`. The default branch name can vary, and if needed, you can verify the name of your branch with:

```sh
git branch
```


## 7. Check branches in GitHub

After pushing your branch to GitHub, you should be able to see it in the web UI. If it is not shown by default, try switching to the branch in the branch dropdown.

This readme file exists in a separate branch in GitHub called `welcome`. After pushing your project the `welcome` branch is no longer needed, and you can [delete it](https://www.google.com/search?q=delete+branch+in+github) to prevent future confusion. Also, you may need to [set `master` as your default branch](https://www.google.com/search?q=set+default+branch+in+github) before GitHub allows you to delete `welcome`.
