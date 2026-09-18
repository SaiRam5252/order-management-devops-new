### BRANCHES:
main/master =
List all branches = git branch
CREATE & SWITCH the branch:
    Create a new branch = git branch <branchName>
    Switch to this branch = git checkout <branchName>
    Create a new branch and switch to it = git checkout -b <branchName>


### Modern way of creating BRANCHES:
Switch to this branch = git switch <branchName>
Create a new branch and switch to it = git switch -c <branchName>


# Connect the Local REPO with REMOTE REPO(GitHub)
    Checking Linked Remote = git remote 
    Checking Linked Remote URL's = git remote -v
    My GitHub Reporitory link: https://github.com/SaiRam5252/order-management-devops-new.git


    Ex:
    git remote add origin https://github.com/SaiRam5252/order-management-devops-new.git
    git remote show origin


    Pushing = git push origin <branch-name>
    Ex: git push origin main


    And make sure you're pushing into the same branch.
    Ex:
    Accepting:
    Local "main/master" branch --> Remote "main/master" branch
    Local  -  Remote
    Main   -  Main
    Dev    -  Dev
    UAT    -  UAT


    Do not push as below:
    Local "main/master" branch --> Remote "Dev" branch
## Switch to Dev Branch and Push the ReadMe file changes to Remote repo as below
    git switch dev  OR git checkout dev
    git add .
    git commit -m "docs: Added commands for remote connection and Pushing the changes"
    git push origin dev

## git stash if u got work for hotfix and leaving the remaining work as it's and start working on hotfix
    It is going to basically take the changes into the current branch whenever you run the git stash command git stash basically takes the changes from the current branch and puts into a temporary stack and then shows that okay currently in your current branch these is nothing, no changes are there 
    Steps:
    1. Create a folder from let side pannel Ex: Product
    2. Add the required file example plp.htm & pdp.htm
    3. Before using Stash command we need to add these changes into staging area first
        git add .
    4. git stash

    Now, u will work on hotfix by creating new branch and commit the changes and go back to previous work so u need to restored all the changes back again product files. Use below command to revert back the files

    git stash pop - file will be restored.


## Git WORKTREE
    1. Create a worktree with existing branch = git worktree add <location> <old-branch-name>
        Ex: git worktree add ./checkout dev
    2. Create a new branch and new worktree with an exiting branch =
        git worktree add -b <new-branch> <location> <existing-branch>
        Ex: git worktree add -b feature/checkout ./checkout dev
    To check the branches
    git branch = you will see +feature/checkout in blue colour

## Remove worktree
    git worktree reomve <name-of-worktree>
    Ex: git worktree remove checkout

## List worktree
    git worktree list


    

    