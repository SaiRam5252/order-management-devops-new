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

### Connect the Local REPO with REMOTE REPO(GitHub) 
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

## Git Reset
To check the latest comments/messages we added : git log --oneline
Ex: 
1872d34 (HEAD -> main, origin/main, origin/HEAD) docs: Added PUSH and REMOTE connection commands
93a6916 docs: Added the PUSH and REMOTE connection commands
1b2e467 docs: Modified the Docs on Main branch
6a8a0ff feat: Added Cart Functionality
2e2c940 Modified the Login & Signup functionality
601502a Added the Login & Signup functionality for Order Management

## Git HARD Reset
git reset --hard <commitID>
Ex: git reset --hard 1b2e467


