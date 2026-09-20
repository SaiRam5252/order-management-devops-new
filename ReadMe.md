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

## Revert command 
    Create one file example Test.htm inside the product folder
    Then add some code in it
    Stage the changes 
    Commit the changes with message
    Then modify the ReadMe.md file also 
<<<<<<< HEAD
    Ex:
        docs: Added the REVERT command example
        f3249e6 feat: added new feature for test file
        96bb83d (origin/feature/US-88934-Add-To-Cart-Functionality) docs: Added RESET Commands
        b33bac3 docs: Added HARD RESET Command
        c43da5b docs: Added the example for reset
        4b97f8f docs: Added Worktree remove and list of worktree
        df224b7 feat: Added new functionality for Payment
        e62c9f2 docs: Add WORKTREE commands
        f88d77d docs: Added STASH commands
        d9014c9 docs: Added SWITCH commands
        2700dd1 docs: Added new comment for branch
        882f5ec docs: Added the new commands
        9e8decf feat: Added new functionality
=======
      

>>>>>>> f6cce56 (docs: Added the REVERT command example)

## Command to revert(To do a specific commet ID but Reset is resets all above the commit ID)
    git revert <commitID>
    Ex: git revert f3249e6

    Then it will open one VIM editor which says that add the comment why u want to revert it
    if VIM editor not working then to come out of it use below command
    -->   escape :wq

    To commit from b33bac3 commit ID to f3249e6 commit ID then use below command
    git revert b33bac3..f3249e6

    To not add the commit message at top use below command to don't any message
    git revert b33bac3..f3249e6 --no-commit

### Git CHERRY-PICK
    Scenario:
    10 User Stories ready to RELEASE on Monday.
    But business came said remove 2 User Stories
    2 User Stories REMOVE

    8 Remaining now

    UAT ---> PRODUCTION
    Merge/Pull Request being raised between UAT & PRODUCTION.
    So whatever changes are present in UAT branch and the changes are not there in PRODUCTION branch then all those changes will be merged to PRODUCTION branch. And then as a result of the merge, there will be a deployment which will be triggered and it will start sending to the PRODUCTION.

    But in UAT branch the 2 changes are still there which we want to remove as business said.
    In that case, now if you raise the pull request, then the component that which you do not want it to deploy will still get deployed. That's where CHERRY-PICK comes into the picture.

    Steps to do:
    1. Identify commit of all those COMMIT IDs of all 8 user stories.
    2. Then create a NEW branch  and that branch will be created based out of Master/Main(since master is the branch where u want to push the changes).
    3. Do the CHERRY-PICK for those 8 commits inside that new user story
    3. Push that Branch.
    4. Then raise a PR(Pull Request) from NEW branch(which we created in step 2) to PRODUCTION.

    1. git log --oneline
                c7fb316 (HEAD -> feature/US-88934-Add-To-Cart-Functionality, origin/feature/US-88934-Add-To-Cart-Functionality) docs: Added the Revert Commands
                
                dc15cb7 Revert "feat: added new feature for test file"
                f6cce56 docs: Added the REVERT command example
                
                f3249e6 feat: added new feature for test file
                96bb83d docs: Added RESET Commands
                b33bac3 docs: Added HARD RESET Command
                c43da5b docs: Added the example for reset
                4b97f8f docs: Added Worktree remove and list of worktree
                df224b7 feat: Added new functionality for Payment

        Identify the commit ID which we want to reply suppose dc15cb7,f6cce56
    
    2.  git checkout -b release/Order-Management-V1.0 main
    3. git cherry-pick dc15cb7 f6cce56
        git cherry-pick --continue
    4. 
    

    