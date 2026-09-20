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