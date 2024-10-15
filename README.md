<img src ="/images.png" alt ="github" style="text-align: center;">
this is repo is for you to learn how to contribute in github and start making projects
team members :  brajesh , munasif , hema;

#### Step 1: Forking the repository :

To work on this project, you will first need to make a copy of this repository. To do this, you should fork the repository and then clone it so that you have a local working copy.

Get your own Fork/Copy of this repository by clicking `Fork` button at right upper corner of your screen.<br><br>

#### Step 2: Clone the Forked Repository

After the repository is forked, you can now clone it so that you have a local working copy of the codebase.

To make your local copy of the repository follow the steps:
- Open the Command Prompt
- Type this command:
  
```bash
$ git clone https://github.com/<your-github-username>/forkedreponame i.e , default webdevelopment
```

#### Step 3: Creating a new branch 
This is one of the very important step that you should follow to contribute in Open Source. A branch helps to manage the workflow, isolate your code and does not creates a mess. To create a new branch:
  
```bash
$ git branch <name_of_branch>
$ git checkout -b <name_of_branch>
```
Keep your cloned repository upto to date by pulling from upstream (this will also avoid any merge conflicts while committing new changes)
```bash
git pull origin main
```

#### Step 5: Contribute
Make relevant changes according to the issue that you were assigned on. Contribute in any way you feel like :)

#### Step 6: Commiting and Pushing
Once you have modified an existing file or added a new file to the project, you can add it to your local repository, which is being done with the git add command.

```bash
git add .
```
With our file staged, we’ll want to record the changes that we have made to the repository with the `git commit` command.

The commit message is an important aspect of your code contribution; it helps the other contributors fully understand the changes you have made, why you made it, and how significant it is.

```bash
git commit -m "useful commit message"
```

At this point you can use the git push command to push the changes to the current branch of your forked repository:

```bash
git push origin <branch-name>
```

#### Step 7: Create Pull Request
Now, you are ready to make a pull request to the original repository.

You should navigate to your forked repository, and press the "Compare & pull request" button on the page.

GitHub will alert you that you can merge the two branches because there is no competing code. You should add in a title, a comment, and then press the “Create pull request” button.
